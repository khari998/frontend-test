import { Restaurant, DdItem  } from '../../models/models';

/**
 * Actions for redux reducers
 * Dictates which logic should be executed in the reducers on redux state
 * */

export const updateRestaurants = (restArr: Restaurant[]) => ({
  type: 'UPDATEREST',
  payload: restArr,
})

export const priceItemToggle = (priceArr: DdItem[]) => ({
  type: 'TOGGLEPRICESELECT',
  payload: priceArr,
})

export const catItemToggle = (catArr: DdItem[]) => ({
  type: 'TOGGLECATSELECT',
  payload: catArr,
})

export const isOpenToggle = () => ({
  type: 'OPENFILTER',
})

export const closeOpenToggle = () => ({
  type: 'CLOSEOPENFILTER',
})

export const priceDDToggle = () => ({
  type: 'PRICEFILTER',
})

export const catDDToggle = () => ({
  type: 'CATFILTER',
})

export const loadMore = () => ({
  type: 'UPDATEVISIBLE',
  payload: 10,
})
