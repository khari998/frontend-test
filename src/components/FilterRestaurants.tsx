import * as React from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';

import { isOpenToggle, closeOpenToggle, priceItemToggle, catItemToggle } from '../redux/actions/actions';
import Dropdown from './Dropdown'
import { DdItem } from '../models/models';

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
  
  const clearAll = () => {
    // Return new array as state with selected property as false to deselect all categories
    const clearCats = ddCats.map((item: DdItem) => {
      item.selected = false;
      return item;
    });

    // Return new array as state with selected property as false to deselect all prices
    const clearPrices = ddPrices.map((item: DdItem) => {
      item.selected = false;
      return item;
    });

    dispatch(closeOpenToggle()) // Sets Open filter to false
    dispatch(priceItemToggle(clearPrices)) // Pass new array to change state
    dispatch(catItemToggle(clearCats)) // Pass new array to change state
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
          <button className="btn btn-block" onClick={clearAll}> CLEAR ALL </button>
        </div>

      </div>
    </Fragment>
  )
}
