import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { faStar, faAngleUp, faAngleDown, faCircle, faCheckCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(farStar, faStar, faAngleUp, faAngleDown, faCircle, farCircle, faDotCircle, faCheckCircle, faStarHalfAlt)

import StarRating from '../../components/StarRating'
import store from '../helpers'

interface ratingProp {
  rating: number,
  size?: any
}

const oneRating: ratingProp = {
  rating: 1
}

const fourRating: ratingProp = {
  rating: 4
}
const oneFiveRating: ratingProp = {
  rating: 1.5
}
const fourFiveRating: ratingProp = {
  rating: 4.5
}

const sizeTest: ratingProp = {
  rating: 1,
  size: '2x'
}

const preTest = (props: ratingProp) => {
  const component: any = renderer.create(
    <Provider store={store}>
      <StarRating {...props} />
    </Provider>
  ).toJSON()
  return component;
}

describe('StarRating Component', () => {

  describe('initial load', () => {
    let component;
    
    it('Should render without errors', () => {
      component = preTest(oneRating)
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should always render 5 stars', () => {
      const test1: boolean  = preTest(oneRating).length === 5
      const test2: boolean  = preTest(fourRating).length === 5
      const test3: boolean = preTest(oneFiveRating).length === 5
      const test4: boolean = preTest(fourFiveRating).length === 5
      const allTests: boolean = [test1, test2, test3, test4 ].every((test: boolean) => test)
      expect(allTests).toBe(true)
    })
    
    it('Should render stars in the correct order', () => {
      const test1Icons: string[] = preTest(oneRating).map((starObj: any) => starObj.props['data-icon'])
      const test1Style: string[] = preTest(oneRating).map((starObj: any) => starObj.props['data-prefix'])
      // Expect order and styling to be exact for each test
      expect(test1Icons).toEqual(['star', 'star', 'star', 'star', 'star'])
      expect(test1Style).toEqual(['fas', 'far', 'far', 'far', 'far'])
      
      const test2Icons: string[] = preTest(fourRating).map((starObj: any) => starObj.props['data-icon'])
      const test2Style: string[] = preTest(fourRating).map((starObj: any) => starObj.props['data-prefix'])
      // Expect order and styling to be exact for each test
      expect(test2Icons).toEqual(['star', 'star', 'star', 'star', 'star'])
      expect(test2Style).toEqual([ 'fas', 'fas', 'fas', 'fas', 'far' ])
      
      
      const test3Icons: string[] = preTest(oneFiveRating).map((starObj: any) => starObj.props['data-icon'])
      const test3Style: string[] = preTest(oneFiveRating).map((starObj: any) => starObj.props['data-prefix'])
      // Expect order and styling to be exact for each test
      expect(test3Icons).toEqual([ 'star', 'star-half-alt', 'star', 'star', 'star' ])
      expect(test3Style).toEqual(['fas', 'fas', 'far', 'far', 'far' ])
      
      const test4Icons: string[] = preTest(fourFiveRating).map((starObj: any) => starObj.props['data-icon'])
      const test4Style: string[] = preTest(fourFiveRating).map((starObj: any) => starObj.props['data-prefix'])
      // Expect order and styling to be exact for each test
      expect(test4Icons).toEqual([ 'star', 'star', 'star', 'star', 'star-half-alt' ])
      expect(test4Style).toEqual([ 'fas', 'fas', 'fas', 'fas', 'fas' ])

    })

    it('Should render proper size', () => {
      component = preTest(sizeTest)
      const storedSizeLocation = component[0].props.className;
      const storedSize = storedSizeLocation.slice(storedSizeLocation.length - 3, storedSizeLocation.length - 1)
      expect(storedSize).toBe(sizeTest.size)
    })

  })

})