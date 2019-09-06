import * as React from 'react'
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'react-spinner-material';

import FilterRestaurants from './FilterRestaurants';
import RestaurantList from './RestaurantList';
import { Restaurant, DdItem } from '../models/models';
import { catItemToggle, updateRestaurants } from '../redux/actions/actions' 
export default function Main(): JSX.Element {
  // Redux hook, grabbing current restaurants on redux store
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
            if (loading) { // Loads spinner while data is being fetched
              return  <Fragment>
                        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true}/> 
                        <h1>... Loading, Please Wait</h1>
                      </Fragment>
            }
            
            if (error) { 
              console.log(error) 
            }
            console.log(data)
            const yelpRestaurants: Restaurant[] = data.restaurants // Creates array of restaurant classes
              .map((rest: any) => new Restaurant(
                rest.id, 
                rest.name,
                rest.categories[0].title,
                rest.hours[0].is_open_now,
                rest.price,
                rest.rating,
                rest.photos[0])
              );
              
            const yelpCategories: DdItem[] = data.restaurants // Creates array of unique categories
              .map((rest: any) => rest.categories)
              .map((catArr: []) => catArr
              .map((catObj: any) => catObj.title))
              .flat(1)
              .filter((cat: string, index: number, array: any) => array.indexOf(cat) >= index)
              .map((cat: string, ind: number) => new DdItem(cat, false))
              
            const allCategories = [new DdItem('All', true), ...yelpCategories]
            
            dispatch(updateRestaurants(yelpRestaurants))
            dispatch(catItemToggle(allCategories))

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
