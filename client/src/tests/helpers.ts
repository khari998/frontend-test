
import { createStore, combineReducers } from 'redux'
import { costArr, categoriesArr } from '../models/ddData'

import { exRestaurants } from '../models/testdata'
import {
  restaurantsReducer,
  openFilterReducer,
  priceFilterReducer,
  catFilterReducer,
  ddItemPriceReducer,
  ddItemCatReducer,
  loadMoreReducer,
} from '../redux/reducers/reducers'


const allReducers = combineReducers({ // combines state from multiple reducers
  restaurants: restaurantsReducer,
  openFilter: openFilterReducer,
  priceFilter: priceFilterReducer,
  catFilter: catFilterReducer,
  ddPrices: ddItemPriceReducer,
  ddCats: ddItemCatReducer,
  maxItems: loadMoreReducer,
})

const store = createStore(
  allReducers, // passing combined reducers to store as state
  { // pass default state for the store dictated by reducers as second argument
    ddPrices: costArr, // set array of cost range as default state
    restaurants: exRestaurants,
    ddCats: categoriesArr
  },
);

export default store