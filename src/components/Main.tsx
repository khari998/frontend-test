import * as React from 'react'
import { Fragment } from 'react';
import FilterRestaurants from './FilterRestaurants';
import RestaurantList from './RestaurantList';
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'react-spinner-material';
import { Restaurant } from '../models/models';

export default function Main(): JSX.Element {
  // Redux hook, grabbing current restaurants on redux store
  const restaurants = useSelector((state: any) => state.restaurants) 

  // Redux hook that allows actions to be dispatched
  const dispatch = useDispatch();

  // // Special react hook for async functions
  // useAsyncEffect(async () => { // Executes on initial render. Replaces ComponentDidMount
  //   // Api call to GraphQL endpoint
  //   // Format data to an array of Restaurant Classes
  //   // Set redux state to new restaurants from GraphQL endpoint
  //   // dispatch(updateRestaurants()) -- final array is passed into updateRestaurants
  // }, [])

  const RestaurantQuery = gql`
    query RestaurantQuery {
      restaurants {
        id
        name
        price
        rating
        categories {
          title
        }
        hours {
          is_open_now
        }
        photos
      }
    }
  `;
  
  return (
    <Fragment>
      <Query query={RestaurantQuery}> 
        {
          ({ loading, error, data } : any) => {
            if (loading) {
              return  <Fragment>
                        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true}/> 
                        <h1>... Loading, Please Wait</h1>
                      </Fragment>
            }
            
            if (error) { 
              console.log(error) 
            }
            console.log(data)
            const yelpRestaurants: Restaurant[] = data.restaurants.map((rest: any) => new Restaurant(
              rest.id, 
              rest.name,
              rest.categories[0].title,
              rest.hours[0].is_open_now,
              rest.price,
              rest.rating,
              rest.photos[0]));

            const yelpCategories = [];
            return <Fragment>
                    <h1>Restaurants</h1>
                    <p>Browse through a curated list of your favorite restaurants</p>
                    <FilterRestaurants />
                    <RestaurantList rList={yelpRestaurants} />
                  </Fragment>
          }
        }
      </Query>
    </Fragment>
  )
}
