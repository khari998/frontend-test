import * as React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp, faAngleDown, faStar as faStar, faStarHalfAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

library.add(fab, faAngleUp, faAngleDown, faStar, faStarHalfAlt, farStar, faCircle, farCircle, faDotCircle, faCheckCircle)

import App from './components/App'
import { costArr, categoriesArr } from './models/ddData'
import { 
  restaurantsReducer, 
  openFilterReducer, 
  priceFilterReducer, 
  catFilterReducer,
  ddItemPriceReducer,
  ddItemCatReducer,
  loadMoreReducer
} from './redux/reducers/reducers'
import { exRestaurants } from './models/testdata'



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

const allReducers = combineReducers({ // combines state from multiple reducers
  restaurants: restaurantsReducer,
  openFilter: openFilterReducer,
  priceFilter: priceFilterReducer,
  catFilter: catFilterReducer,
  ddPrices: ddItemPriceReducer,
  ddCats: ddItemCatReducer,
  maxItems: loadMoreReducer
})

const store = createStore(
  allReducers, // passing combined reducers to store as state
  { // pass default state for the store dictated by reducers as second argument
    ddPrices: costArr, // set array of cost range as default state
    restaurants: exRestaurants,
    ddCats: categoriesArr
  },
);


const rootId = document.getElementById('root'); // Access root id property on index.html

render( // Wrap App in Provider && pass store as prop to give components access to redux store
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>, 
  rootId // render App with redux store to root id
)