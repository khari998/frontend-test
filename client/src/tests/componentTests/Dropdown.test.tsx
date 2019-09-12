import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { faAngleUp, faAngleDown, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faAngleUp, faAngleDown, faCircle, farCircle, faDotCircle, faCheckCircle)

import { DdItem } from '../../models/models'
import { costArr, categoriesArr } from '../../models/ddData'
import Dropdown from '../../components/Dropdown'
import store from '../helpers'


interface ddProps { // Defines types for destructured props
  ddList: DdItem[],
  ddHeader: string,
  ddOpen: boolean,
}

const preTest = (props:ddProps) => {
  const component: any = renderer.create(
    <Provider store={store}>
      <Dropdown {...props} />
    </Provider>
  ).toJSON()
  return component;
}

describe('Dropdown Component', () => {

  describe('Prices Dropdown -- Initial Render', () => {
    let component: any;
    // Mock props for prices dropdown. 
    const pricesProps: ddProps = {
      ddList: costArr,
      ddHeader: "Price",
      ddOpen: false,
    }

    beforeEach(() => {  // assign necessary depencies before each test
        component = preTest(pricesProps)
      }
    )
    
    it('Should render component with all properties without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should not render a ul initially', () => {
      // Checks if the no ul is loaded
      const ul = component.children.filter((childObj: any) => childObj.type === 'ul')
      expect(ul).toEqual([])
    })

    it('Should render arrow in down position', () => {
      // check to see if the icon on the All option has an angle down property
      const angleDown:boolean = component.children[0].children[1].props['data-icon'] === 'angle-down' ? true : false
      expect(angleDown).toBe(true)
    })
  })

  describe('Prices Dropdown -- Clicked Initial Render', () => {
    let component: any;
    let ul: any
    // Mock props for prices dropdown. 
    const pricesProps: ddProps = {
      ddList: costArr,
      ddHeader: "Price",
      ddOpen: true,
    }

    beforeEach(() => {  // assign necessary depencies before each test
        component = preTest(pricesProps)
        ul = component.children.filter((childObj: any) => childObj.type === 'ul')[0].children
      }
    )
    
    it('Should render component with all properties without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should render a non-empty ul when clicked', () => {
      // check to se if the ul has a length
      const hasChildren = ul.length === costArr.length ? true : false
      expect(hasChildren).toEqual(true)
    })

    it('Should render arrow in up position', () => {
      // check to see if the icon on the All option has an angle up property
      const angleUp: boolean = component.children[0].children[1].props['data-icon'] === 'angle-up' ? true : false
      expect(angleUp).toBe(true)
    })

    it('Should only have all filter selected', () => {
      // Check to see if the all option is checked while all other options are not checked
      const allCheck: boolean = ul[0].children[0].props['data-icon'] === 'check-circle'
      const restOfListCheck: boolean = ul.slice(1).map((divObj: any) => divObj.children[0].props['data-icon']).every((iconType: string) => iconType !== 'circle-check')
      expect(allCheck && restOfListCheck).toBe(true);
    })
    
  })
  

  describe('Categories Dropdown -- Initial Render', () => {
    let component: any;
    // Mock props for categories dropdown. 
    const catProps: ddProps = {
      ddList: categoriesArr,
      ddHeader: "Categories",
      ddOpen: false,
    }
    beforeEach(() => {  // assign necessary depencies before each test
        component = preTest(catProps)
      }
    )
  
    it('Should render component with all properties without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should not render a ul initially', () => {
      // checks to see if a ul is contained on the component
      const ul = component.children.filter((childObj: any) => childObj.type === 'ul')
      expect(ul).toEqual([])
    })

    it('Should render arrow in down position', () => {
      // check to see if the icon on the All option has an angle down property
      const angleDown: boolean = component.children[0].children[1].props['data-icon'] === 'angle-down' ? true : false
      expect(angleDown).toBe(true)
    })

  })

  describe('Categories Dropdown -- Clicked Initial Render', () => {
    let component: any;
    let ul: any;
    // Mock props for cat dropdown. 
    const catProps: ddProps = {
      ddList: categoriesArr,
      ddHeader: "Categories",
      ddOpen: true,
    }

    beforeEach(() => { // assign necessary depencies before each test
        component = preTest(catProps)
        ul = component.children.filter((childObj: any) => childObj.type === 'ul')[0].children
      }
    )

    it('Should render component with all properties without errors', () => {
      expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
    })

    it('Should render a non-empty ul when clicked', () => {
      // checking if the ul array has a length
      const hasChildren: boolean = ul.length === categoriesArr.length ? true : false
      expect(hasChildren).toEqual(true)
    })

    it('Should render arrow in up position', () => {
      // check to see if the icon on the All option has an angle up property
      const angleUp: boolean = component.children[0].children[1].props['data-icon'] === 'angle-up' ? true : false
      expect(angleUp).toBe(true)
    })

    it('Should only have all filter selected', () => { 
      // check to see if the all option is checked while all other options are not checked
      const allCheck: boolean = ul[0].children[0].props['data-icon'] === 'check-circle'
      const restOfListCheck: boolean = ul.slice(1).map((divObj: any) => divObj.children[0].props['data-icon']).every((iconType: string) => iconType !== 'circle-check')
      expect(allCheck && restOfListCheck).toBe(true);
    })

  })

})
