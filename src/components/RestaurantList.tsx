import * as React from 'react'
import RestaurantItem from './RestaurantItem'
import { Restaurant, DdItem } from '../models/models'
import { useSelector } from 'react-redux';

interface rListProps {
  rList: Restaurant[],
}

export default function RestaurantList({ rList } : rListProps) {
  // Redux hook to grab current openFilter boolean from redux store
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
    rList = rList.filter((rest: Restaurant) => catFilterContent.includes(rest.category));
  }

  // Filter all restaurants that have a price matching a selected price
  if (priceFilterContent.length && priceFilterContent[0] !== "All") {
    rList = rList.filter((rest: Restaurant) => priceFilterContent.includes(rest.cost));
  }

  return (
    <ul className="restaurants">
      { 
        rList.length ? 
        rList.map((restaurant) => <RestaurantItem R={restaurant} key={restaurant.resId}/>)
        : <div>
            <h1>
              No venues match your filter parameters.
            </h1>
            <h1>
              Please clear your filters and try again.
            </h1>
          </div>
      }
    </ul>
  )
}
