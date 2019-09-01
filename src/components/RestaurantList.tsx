import * as React from 'react'
import RestaurantItem from './RestaurantItem'

export default function RestaurantList() {
  return (
    <ul className="restaurants">
      <RestaurantItem/>
    </ul>
  )
}
