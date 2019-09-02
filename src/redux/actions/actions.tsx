import { Restaurant } from '../../models/models';

/**
 * Actions for redux reducers
 * Dictates which logic should be executed in the reducers on redux state
 * */

export const updateRestaurants = (restArr: Restaurant[]) => ({
  type: 'UPDATEREST',
  payload: restArr,
})

export const isOpenToggle = () => ({
  type: 'OPENFILTER',
})

export const priceDDToggle = () => ({
  type: 'PRICEFILTER',
})

export const catDDToggle = () => ({
  type: 'CATFILTER',
})
