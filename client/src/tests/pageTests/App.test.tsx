import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { faAngleUp, faAngleDown, faStar as faStar, faStarHalfAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faCircle as farCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add( faAngleUp, faAngleDown, faStar, faStarHalfAlt, farStar, faCircle, farCircle, faDotCircle, faCheckCircle)


import App from '../../pages/App'
import { Provider } from 'react-redux';
import store from '../helpers';
import { MemoryRouter } from 'react-router';

const component: any = renderer.create(
  <Provider store={store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </Provider>
).toJSON()

describe('App Component', () => {

  it('Should render without errors', () => {
    expect(component).toMatchSnapshot(); // checks snapshot of loaded JSON data from component
  })

})