import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { faStar, faAngleUp, faAngleDown, faCircle, faCheckCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(farStar, faStar, faAngleUp, faAngleDown, faCircle, farCircle, faDotCircle, faCheckCircle, faStarHalfAlt)

import store from '../helpers'

import RestaurantList from '../../components/RestaurantList'
import { MemoryRouter } from 'react-router-dom';
import { exRestaurants } from '../../models/testdata';

const component: any = renderer.create(
  <Provider store={store}>
    <MemoryRouter>
      <RestaurantList />
    </MemoryRouter>
  </Provider>
).toJSON()

describe('RestaurantList Component', () => {

  describe('Initial Render', () => {
    
    it('Should render without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should have the same length as the initial state', () => {
      // check if the length of the list matches value stored on initial state
      const listCheck: boolean = component[1].children.length === exRestaurants.length
      expect(listCheck).toBe(true)
    })

  })


})
