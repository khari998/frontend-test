import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';

import { isOpenToggle, closeOpenToggle, priceItemToggle, catItemToggle, closeFilterLists } from '../redux/actions/actions';
import Dropdown from './Dropdown'
import { DdItem } from '../models/models';

const FilterRestaurants: React.FC = (): JSX.Element => {
  // UseSelector - redux hook that grabs current elements of state within redux store
  const openFilter = useSelector((state: any) => state.openFilter)
  const priceFilter = useSelector((state: any) => state.priceFilter)
  const catFilter = useSelector((state: any) => state.catFilter)
  const ddCats = useSelector((state: any) => state.ddCats)
  const ddPrices = useSelector((state: any) => state.ddPrices)

  const dispatch = useDispatch(); // redux hook that allows actions to be dispatched

  // If default filter setting is selected, set boolean for clear all button to change color
  let enabled: boolean; 
  if (ddCats[0].selected && ddCats[0].content === 'All' && ddPrices[0].selected && ddPrices[0].content === 'All' && openFilter === false) {
    enabled = false;
  } else {
    enabled = true;
  }

  const toggleOpen = () => { // click handler function for toggling open filter
    dispatch(isOpenToggle()) // dispatches isOpenToggle action to redux store
  } 
  
  const clearAll = () => { // click handler function for clearing all categories
    // Pass new array as state with selected property as false to deselect all categories
    const clearCats = ddCats.map((item: DdItem) => {
      if (item.content !== "All") { // Account for All filter edge case
        item.selected = false;
      } else {
        item.selected = true;
      }
      return item;
    });

    // Pass new array as state with selected property as false to deselect all prices
    const clearPrices = ddPrices.map((item: DdItem) => {
      if (item.content !== "All") { // Account for All filter edge case
        item.selected = false;
      } else {
        item.selected = true; // Set All filter to true when the rest are cleared
      }
      return item;
    });
    
    // Dispatch changes to state on redux store
    dispatch(closeOpenToggle()) // Sets Open filter to false
    dispatch(priceItemToggle(clearPrices)) // Pass new array to change state
    dispatch(catItemToggle(clearCats)) // Pass new array to change state
    dispatch(closeFilterLists()) // close current open filter lists -- comment out to keep lists open
  }

  return (
    <div className="dd-container-wrapper" >
      <div className="dd-container" >

        <div className="dd-filter" >
          {"Filter By:" }
        </div>

        <div className="dd-open" onClick={toggleOpen} >
          {openFilter ? <FontAwesomeIcon icon={['far', 'dot-circle']} color="#002B56" /> : <FontAwesomeIcon icon={['far', 'circle']} color="#002B56" /> }
          {'  Open Now'}
        </div>

        <div className="dd-dd1" >
          <Dropdown 
            ddList={ddPrices}
            ddHeader="Price"
            ddOpen={priceFilter}
          ></Dropdown>
        </div>

        <div className="dd-dd2" >
          <Dropdown
            ddList={ddCats}
            ddHeader="Categories"
            ddOpen={catFilter}
          ></Dropdown>
        </div>

        <div className="dd-button" >
          {
            enabled ? <button className="dd-btn" onClick={clearAll} > CLEAR ALL </button> :
              <button className="dd-btn" disabled onClick={clearAll} > CLEAR ALL </button>
          }
        </div>

      </div>
    </div>
  )
}

// Functional Component is memoized for higher performance
const MemFilterRestaurants = React.memo(FilterRestaurants)

export default MemFilterRestaurants;
