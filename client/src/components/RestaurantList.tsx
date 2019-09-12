import * as React from 'react'
import RestaurantItem from './RestaurantItem'
import { Restaurant, DdItem } from '../models/models'
import { useSelector, useDispatch } from 'react-redux';
import { loadMore } from '../redux/actions/actions';
import { Fragment } from 'react';

const RestaurantList: React.FC = (): JSX.Element => {
  // Redux hook that allows actions to be dispatched
  const dispatch = useDispatch();

  let rList = useSelector((state: any) => state.restaurants) 

  // Redux hook to grab maxItems and openFilter from redux store
  const maxItems = useSelector((state: any) => state.maxItems);
  const openFilter = useSelector((state: any) => state.openFilter) 

  const catFilterContent = useSelector((state: any) => state.ddCats)
    .filter((cat: DdItem ) => cat.selected) // Filter only selected items
    .map((cat: DdItem) => cat.content) // Map to content strings to compare to restaurant list

  const priceFilterContent = useSelector((state: any) => state.ddPrices)
    .filter((price: DdItem) => price.selected) // Filter only selected items
    .map((price: DdItem) => price.content) // Map to content strings to compare to restaurant list

  // Filtering logic for restaurant rendering
  if (openFilter) { // Filter all restaurants that are Open 
    rList = rList.filter((rest : Restaurant) => rest.isOpen);
  }

  // Filter all restaurants that have a category matching a selected category
  if (catFilterContent.length && catFilterContent[0] !== "All") {
    rList = rList.filter((rest: Restaurant) => catFilterContent.reduce((bool: boolean, str: string) => rest.category.includes(str) ? true : bool, false));
  }

  // Filter all restaurants that have a price matching a selected price
  if (priceFilterContent.length && priceFilterContent[0] !== "All") {
    rList = rList.filter((rest: Restaurant) => priceFilterContent.includes(rest.cost));
  }


  const loadAdditionalItems = () => { // Increases maximum items that can be loaded
    dispatch(loadMore()) // Dispatches loadMore action to increase maxItems
  }

  return (
    <Fragment>
      <h1 className="rest-subtitle" >All Restaurants</h1>
      <ul className="restaurants" >
        { 
          rList.length ? 
          rList.slice(0, maxItems).map((restaurant: Restaurant) => <RestaurantItem R={restaurant} key={restaurant.resId}/>)
            : <div className="no-rests" >
              <h1 className="no-rests-text" >
                No venues match your filter parameters.
              </h1>
              <h1 className="no-rests-text" >
                Please clear your filters and try again.
              </h1>
            </div>
        }
      </ul>
      {
        maxItems < rList.length && 
        <button className="btn load-more" onClick={loadAdditionalItems}> LOAD MORE </button>
      }
    </Fragment>
  )
}

// Functional Component is memoized for higher performance
const MemRestaurantList = React.memo(RestaurantList)

export default MemRestaurantList
