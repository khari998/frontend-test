import * as React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp, faAngleDown, faStar as faStar, faStarHalfAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'

library.add(fab, faAngleUp, faAngleDown, faStar, faStarHalfAlt, farStar, faCircle, farCircle, faDotCircle, faCheckCircle)

import App from './components/App'
import { exRestaurants } from './models/testdata'
import { restaurantsReducer, openFilterReducer, priceFilterReducer, catFilterReducer } from './redux/reducers/reducers'


const allReducers = combineReducers({ // combines state from multiple reducers
  restaurants: restaurantsReducer,
  openFilter: openFilterReducer,
  priceFilter: priceFilterReducer,
  catFilter: catFilterReducer,
})

const store = createStore(
  allReducers, // passing combined reducers to store as state
  { // pass default state for the store dictated by reducers as second argument
    restaurants: exRestaurants, // set example data as default state for development
  },
);

console.log(store.getState()) // log initial state for development

const rootId = document.getElementById('root'); // Access root id property on index.html

render( // Wrap App in Provider && pass store as prop to give components access to redux store
  <Provider store={store}>
      <App />
  </Provider>, 
  rootId // render App with redux store to root id
)