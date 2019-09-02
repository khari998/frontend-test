import * as React from 'react'
import RestaurantItem from './RestaurantItem'
import { Restaurant } from '../models/models'
import { useDispatch, useSelector } from 'react-redux';

interface rListProps {
  rList: Restaurant[],
}

export default function RestaurantList({ rList } : rListProps) {

  const openFilter = useSelector((state: any) => state.openFilter) 
  const filterRestaurants = () => {
    let filterList = rList.filter((rest) => {
      if (rest.isOpen && openFilter) {
        return rest
      }
    });
  }

  return (
    <ul className="restaurants">
      { rList.map((restaurant, ind) => <RestaurantItem R={restaurant} key={restaurant.resId}/>) }
    </ul>
  )
}
