import * as React from 'react'
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Query } from 'react-apollo'
import { RestaurantQuery } from '../queries/mainQuery'
import Spinner from 'react-spinner-material';

import FilterRestaurants from '../components/FilterRestaurants';
import RestaurantList from '../components/RestaurantList';
import { Restaurant, DdItem, Review } from '../models/models';
import { catItemToggle, updateRestaurants } from '../redux/actions/actions' 
import { withRouter } from 'react-router-dom';

const Main: React.FC = (): JSX.Element => (
  <Fragment >
    <Query query={RestaurantQuery}> 
      {
        ({ loading, error, data } : any) => {
          if (loading) {
            // Loads spinner while data is being fetched
            return (
              <div className="load-spinner">
                <Spinner
                  size={120}
                  className="spinner"
                  spinnerColor={"#333"}
                  spinnerWidth={2}
                  visible={true}
                />
                <h1 className="loading">
                  ... Loading, Please Wait
                </h1>
              </div>
            );
          }

          if (error) {
            console.error(error);
          }

          const yelpRestaurants: Restaurant[] = data.restaurants // Creates array of restaurant classes
            .map(
              (rest: any) =>
                new Restaurant(
                  rest.id,
                  rest.name,
                  rest.categories.map((obj: any) => obj.title),
                  rest.hours[0].is_open_now,
                  rest.price,
                  rest.rating,
                  rest.photos[0],
                  rest.review_count,
                  rest.location.formatted_address,
                  Object.keys(rest.coordinates).map(keys => rest.coordinates[keys]).slice(0, 2), // Array of coordinate points from coordinate object
                  rest.reviews.map(
                    (rev: any) =>
                      new Review( // Adds Array of reviews to Restaurant
                        rev.id,
                        rest.id,
                        rev.user.name,
                        rev.time_created,
                        rev.rating,
                        rev.text,
                        rev.user.image_url
                      )
                  )
                )
            );

          const yelpCategories: DdItem[] = data.restaurants // Creates array of unique categories
            .map((rest: any) => rest.categories) // maps to categories
            .map((catArr: []) => catArr.map((catObj: any) => catObj.title)) // Changes array into list of strings
            .flat(1) // Flattens nested arrays into one array
            .filter((
                cat: string,
                index: number,
                array: any
              ) => array.indexOf(cat) >= index) // Filters unique categories
            .sort() // Sorts alphabetically
            .map((cat: string) => new DdItem(cat, false)); // maps to DdItem

          const allCategories = [
            new DdItem("All", true),
            ...yelpCategories
          ]; // Adds "All" filter to DdItem list
          // Redux hook that allows actions to be dispatched
          const dispatch = useDispatch();
          dispatch(updateRestaurants(yelpRestaurants)); // Update redux state with list of restaurants
          dispatch(catItemToggle(allCategories)); // Update redux state with list of unique categories

          return (
            <Fragment>
              <h1 className="rest-sub-1">
                Restaurants
              </h1>
              <p className="rest-sub2">
                Browse through a curated
                list of your favorite
                restaurants
              </p>
              <FilterRestaurants />
              <RestaurantList />
            </Fragment>
          );
        }
      }
      </Query>


      {/* If API Key breaks, render this instead */}
      
      {/* <h1 className="rest-sub-1" >Restaurants</h1>
      <p className="rest-sub2" >Browse through a curated list of your favorite restaurants</p>
      <FilterRestaurants />
      <RestaurantList />   */}
      
    </Fragment>
  )

// Functional Com÷ponent is memoized for higher performance
const MemMain = React.memo(Main)

export default withRouter(MemMain)
