
require("dotenv").config();
const axios = require("axios");
const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLSchema
} = require('graphql')

const { restQL } = require("./queries");

// Axios request to Yelp API

const yelpGraphQL = axios.create({
  baseURL: "https://api.yelp.com/v3/graphql",
  headers: {
    Authorization: `Bearer ${process.env.YELPKEY}`
  }
});

// GraphQL Schema for data from Yelp API

const RestaurantType = new GraphQLObjectType({
  name: "restaurants",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    review_count: { type: GraphQLInt } ,
    photos: { type: GraphQLList(GraphQLString)},
    location: { type: LocationType },
    hours: { type: GraphQLList(HoursType)},
    categories: { type: GraphQLList(CatType)},
    reviews: { type: GraphQLList(ReviewsType)},

  })
})

const LocationType = new GraphQLObjectType({
  name: "location",
  fields: () => ({
    formatted_address: { type: GraphQLString }
  })
})

const HoursType = new GraphQLObjectType({
  name: "hours",
  fields: () => ({
      is_open_now: {type: GraphQLBoolean }
  })
})

const CatType = new GraphQLObjectType({
  name: "categories",
  fields: () => ({
    title: { type: GraphQLString }
  })
})

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    name: { type: GraphQLString },
    image_url: { type: GraphQLString }
  })
})

const ReviewsType = new GraphQLObjectType({
  name: "reviews",
  fields: () => ({
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    time_created: { type: GraphQLString },
    rating: { type: GraphQLInt },
    user: { type: UserType }
  })
});

// Root Query for GraphQL endpoint

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurants: {
      type: new GraphQLList(RestaurantType),
      resolve(parent, args) { // Resolve Yelp data for querying
        return yelpGraphQL
          .post("", { query: restQL })
          .then(result => result.data.data.search.business)
          .catch(err => console.log("There was an error", err));
      },
    }
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
