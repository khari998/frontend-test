import * as React from 'react'
import RestaurantItem from './RestaurantItem'
import { Restaurant } from '../models/models'

interface rListProps {
  rList: Restaurant[],
}

export default function RestaurantList({ rList } : rListProps) {
  return (
    <ul className="restaurants">
      { rList.map((restaurant) => <RestaurantItem R={restaurant}/>) }
    </ul>
  )
}
