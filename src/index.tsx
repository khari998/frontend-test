import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Fragment } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp, faAngleDown, faStar as faStar, faStarHalfAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'

library.add(fab, faAngleUp, faAngleDown, faStar, faStarHalfAlt, farStar, faCircle, farCircle, faDotCircle, faCheckCircle)

import FilterRestaurants from './components/FilterRestaurants';
import RestaurantList from './components/RestaurantList';
import { exRestaurants } from './models/testdata'
import { Restaurant, Review, Cost, Categories }  from './models/models';


export default function App(): JSX.Element {

  return (
    <Fragment>
      <h1>Restaurants</h1>
      <p>Browse through a curated list of your favorite restaurants</p>
      <FilterRestaurants/>
      <RestaurantList rList={exRestaurants}/>
    </Fragment>
  )
}

const rootId = document.getElementById('root');

ReactDOM.render(<App/>, rootId)