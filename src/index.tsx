import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

import FilterRestaurants from './components/FilterRestaurants';
import RestaurantList from './components/RestaurantList';
import { Restaurant, Review, Cost, Categories }  from './models/models';


export default function App(): JSX.Element {

  return (
    <Fragment>
      <h1>Restaurants</h1>
      <p>Browse through a curated list of your favorite restaurants</p>
      {/* <FilterRestaurants/> */}
      <RestaurantList/>
    </Fragment>
  )
}

const rootId = document.getElementById('root');

ReactDOM.render(<App/>, rootId)