import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { faStar, faAngleUp, faAngleDown, faCircle, faCheckCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(farStar, faStar, faAngleUp, faAngleDown, faCircle, farCircle, faDotCircle, faCheckCircle, faStarHalfAlt)

import RestaurantItem from '../../components/RestaurantItem'
import store from '../helpers'
import { Restaurant } from '../../models/models';
import { exRestaurants } from '../../models/testdata'
import { MemoryRouter } from 'react-router-dom'

interface rListItemProps {
  R: Restaurant,
}

const preTest = (props: rListItemProps) => {
  const component: any = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <RestaurantItem {...props} />
      </MemoryRouter>
    </Provider>
  ).toJSON()
  return component;
}

describe('RestaurantItem Component', () => {

  describe('Initial render', () => {
    let component: any;
    
    describe('Static info', () => {
      const basicRest: rListItemProps = {
        R: exRestaurants[0]
      } 
    
      beforeEach(() => {  // assign necessary depencies before each test
        component = preTest(basicRest)
      })
    
      it('Should render without errors', () => {
        expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
      })
    
      it('Should render correct Restaurant Image', () => {
        // checks if the image src property matches the string passed onto the Restaurant passed in
        const imageCheck: boolean = component.children[0].children[0].children[0].props.src === basicRest.R.img
        expect(imageCheck).toBe(true)
      })

    })
    
    describe('Dynamic Info', () => {
      
      it('Should render multiple Categories', () => {
        const multipleCatsRest: rListItemProps = {
          R: exRestaurants[1]
        } 
        component = preTest(multipleCatsRest)
        // checks if the length of categories is the same as the length on the passed restaurant
        const categoryCheck: boolean = component.children[0].children[1].children[2].children[0].children[0].children.length === multipleCatsRest.R.category.length
        expect(categoryCheck).toBe(true)
      })

      it('Should render correct colors based on open status', () => {
        const openRest: rListItemProps = {
          R: exRestaurants[4]
        } 
        const closedRest: rListItemProps = {
          R: exRestaurants[5]
        } 
        const openComponent = preTest(openRest)
        const closedComponent = preTest(closedRest)
        // check colors stored on open and closed components to see if they match the correct colors
        const openCheck: boolean = openComponent.children[0].children[1].children[2].children[0].children[2].children[0].props.color === '#00E8A4'
        const closedCheck: boolean = closedComponent.children[0].children[1].children[2].children[0].children[2].children[0].props.color === '#FF3548'
        
        expect(openCheck && closedCheck).toBe(true)
      })
  
      it('Should render correct open status text', () => {
        const openRest: rListItemProps = {
          R: exRestaurants[4]
        }
        const closedRest: rListItemProps = {
          R: exRestaurants[5]
        }
        const openComponent = preTest(openRest)
        const closedComponent = preTest(closedRest)
        // check if correct text rendered based on close boolean

        const openTextCheck: boolean = openComponent.children[0].children[1].children[2].children[0].children[2].children[1] === '  OPEN NOW'
        const closedTextCheck: boolean = closedComponent.children[0].children[1].children[2].children[0].children[2].children[1] === '  CLOSED'

        expect(openTextCheck && closedTextCheck).toBe(true)
      })
    })

  })

})