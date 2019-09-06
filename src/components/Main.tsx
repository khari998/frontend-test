import * as React from 'react'
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'react-spinner-material';

import FilterRestaurants from './FilterRestaurants';
import RestaurantList from './RestaurantList';
import { Restaurant, DdItem, Review } from '../models/models';
import { catItemToggle, updateRestaurants } from '../redux/actions/actions' 
export default function Main(): JSX.Element {
  // Redux hook that allows actions to be dispatched
  const dispatch = useDispatch();
  
  const RestaurantQuery = gql`
    query RestaurantQuery {
      restaurants {
        id
        name
        price
        rating
        review_count
        location {
          formatted_address
        }
        categories {
          title
        }
        hours {
          is_open_now
        }
        photos
        reviews {
          id
          rating
          text
          time_created
          user {
            name
            image_url
          }
        }
      }
    }
  `;
  
  return (
    <Fragment>
      <Query query={RestaurantQuery}> 
        {
          ({ loading, error, data } : any) => {
            if (loading) { // Loads spinner while data is being fetched
              return  <Fragment>
                        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true}/> 
                        <h1>... Loading, Please Wait</h1>
                      </Fragment>
            }
            
            if (error) { 
              console.log(error) 
            }
            console.log(data.restaurants)

            const yelpRestaurants: Restaurant[] = data.restaurants // Creates array of restaurant classes
              .map((rest: any) => new Restaurant(
                  rest.id, 
                  rest.name,
                  rest.categories.map((obj : any) => obj.title),
                  rest.hours[0].is_open_now,
                  rest.price,
                  rest.rating,
                  rest.photos[0],
                  rest.location.formatted_address,
                  rest.review_count,
                  rest.reviews.map((rev: any) => new Review( // Adds Array of reviews to Restaurant
                    rev.id, 
                    rest.id, 
                    rev.user.name, 
                    rev.time_created, 
                    rev.rating, 
                    rev.text, 
                    rev.user.image_url
                  )),
                )
              );
              
            const yelpCategories: DdItem[] = data.restaurants // Creates array of unique categories
              .map((rest: any) => rest.categories) // maps to categories
              .map((catArr: []) => catArr.map((catObj: any) => catObj.title)) // Changes array into list of strings
              .flat(1) // Flattens nested arrays into one array
              .filter((cat: string, index: number, array: any) => array.indexOf(cat) >= index) // Filters unique categories
              .sort() // Sorts alphabetically
              .map((cat: string) => new DdItem(cat, false)) // maps to DdItem
              
            const allCategories = [new DdItem('All', true), ...yelpCategories] // Adds "All" filter to DdItem list
            
            dispatch(updateRestaurants(yelpRestaurants)) // Update redux state with list of restaurants
            dispatch(catItemToggle(allCategories)) // Update redux state with list of unique categories

            return <Fragment>
                    <h1>Restaurants</h1>
                    <p>Browse through a curated list of your favorite restaurants</p>
                    <FilterRestaurants />
                    <RestaurantList />
                  </Fragment>
          }
        }
      </Query>
    </Fragment>
  )
}
