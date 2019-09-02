import * as React from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';

import { isOpenToggle } from '../redux/actions/actions';
import Dropdown from './Dropdown'

export default function FilterRestaurants() {
  // UseSelector - redux hook that grabs current elements of state within redux store
  const openFilter = useSelector((state: any) => state.openFilter)
  const priceFilter = useSelector((state: any) => state.priceFilter)
  const catFilter = useSelector((state: any) => state.catFilter)
  const ddCats = useSelector((state: any) => state.ddCats)
  const ddPrices = useSelector((state: any) => state.ddPrices)

  const dispatch = useDispatch(); // redux hook that allows actions to be dispatched

  const toggleOpen = () => { // click handler function for toggling open filter
    dispatch(isOpenToggle()) // dispatches isOpenToggle action to redux store
  }

  return (
    <Fragment>
      <div className="dd-container">

        <div className="dd-filter">
          {"Filter By:" }
        </div>

        <div className="dd-open" onClick={toggleOpen}>
          { openFilter ? <FontAwesomeIcon icon={['far', 'dot-circle']} /> : <FontAwesomeIcon icon={['far', 'circle']} /> }
          {'  Open Now'}
        </div>

        <div className="dd-dd1">
          <Dropdown 
            ddList={ddPrices}
            ddHeader="Price"
            ddOpen={priceFilter}
          ></Dropdown>
        </div>

        <div className="dd-dd2">
          <Dropdown
            ddList={ddCats}
            ddHeader="Categories"
            ddOpen={catFilter}
          ></Dropdown>
        </div>

        <div className="dd-button">
          <button className="btn btn-block" onClick={() => { }}> CLEAR ALL </button>
        </div>

      </div>
    </Fragment>
  )
}
