import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { faAngleUp, faAngleDown, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faAngleUp, faAngleDown, faCircle, farCircle, faDotCircle, faCheckCircle)

import FilterRestaurants from '../../components/FilterRestaurants'
import store from '../helpers'

const component: any = renderer.create(
  <Provider store={store}>
    <FilterRestaurants />
  </Provider>
).toJSON()

describe('FilterRestaurants Component', () => {

  // Test initial render
  describe('Prices Dropdown -- Initial Render', () => {

    it('Should render component with all properties without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should render with open now filter not selected', () => { 
      // check if the open filter has an empty circle icon
      const openFilterCheck: boolean = component.children[0].children[1].children[0].props['data-icon'] === 'circle'
      expect(openFilterCheck).toBe(true)
    })

    it('Should render with clear all button disabled', () => {
      // checks button properties to see if it is diabled
      const buttonDisabled: boolean = component.children[0].children[4].children[0].props.disabled
      expect(buttonDisabled).toBe(true)
    })
    
  })
})