import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { faStar, faAngleUp, faAngleDown, faCircle, faCheckCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faAngleUp, faAngleDown, faStar, faStarHalfAlt, farStar, faCircle, farCircle, faDotCircle, faCheckCircle)

import RestaurantReviewItem from '../../components/RestaurantReviewItem'
import { Review } from '../../models/models';
import store from '../helpers'
import { exRestaurants } from '../../models/testdata';
import { tsBooleanKeyword } from '@babel/types';

interface reviewsProp {
  review: Review,
}

const sampleReview = exRestaurants[0].reviews[0];

const reviewsPassedProp: reviewsProp = {
  review: sampleReview
}

const component: any = renderer.create(
  <Provider store={store}>
    <RestaurantReviewItem {...reviewsPassedProp} />
  </Provider>
).toJSON()

describe('RestaurantReviewItem Component', () => {
  describe('Initial Render' , () => {
    it('Should render without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should render the correct image', () => {
      // checks if image is the same string as the one passed in as a prop
      const imgCheck: boolean = component.children[0].children[0].props.src === reviewsPassedProp.review.image
      expect(imgCheck).toBe(true)
    })
    
    it('Should render the correct date', () => {
      // check if the date string has ben formatted to the proper date
      const dateCheck = (new Date(component.children[1].children[1].children[0].children[0])).toString() === (new Date(reviewsPassedProp.review.date)).toString()
      expect(dateCheck).toBe(true)
    })
    // it('Should render the correct text', () => {})
    it('Should render the correct name', () => {
      const nameCheck: boolean = component.children[1].children[0].children[0] === reviewsPassedProp.review.name
      expect(nameCheck).toBe(true)
    })

    it('Should render the correct text', () => {
      const textCheck: boolean = component.children[2].children[1].children[0] === reviewsPassedProp.review.review
      expect(textCheck).toBe(true)
    })
    
  })

})
