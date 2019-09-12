import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { priceDDToggle, catDDToggle, catItemToggle, priceItemToggle } from '../redux/actions/actions';

import { DdItem } from '../models/models';

interface ddProps { // Defines types for destructured props
  ddList: DdItem[],
  ddHeader: string,
  ddOpen: boolean,
}

const Dropdown = ({ ddList, ddHeader, ddOpen } : ddProps) => {

  const dispatch = useDispatch(); // Allows actions to be dispatched to store

  const openDD = () => { // Dispatches actions to redux store based on which Dropdown is clicked
    if (ddHeader === "Price") {
      dispatch(priceDDToggle());
    } else if (ddHeader === "Categories") {
      dispatch(catDDToggle());
    }
  }

  const selectDdItem = (itemInd: number) => { // Change state to new list of DdItems with clicked item selected property changed to true
    const newList = [...ddList] // Stores previous values of state in copied list  
    const newItem = newList[itemInd] // Stores clicked item
    const allFilter = newList[0]; // Stores All filter to handle edge cases

    // If the selected filter is not "All"
    if (itemInd > 0) {
      newItem.selected = !newItem.selected // Changes selected property on price to opposite value boolean
      newList[itemInd] = newItem; // Replace old DdItem with updated newItem
      allFilter.selected = false; // Set the All filter selected property to false if any other item is selected
      newList[0] = allFilter; // Update list with new All filter
      
      // Reset All filter if no items are selected
      if(newList.every((item: DdItem) => item.selected === false)) {
        allFilter.selected = true; // Set the All filter selected property to true if no items are selected
        newList[0] = allFilter; // Update list with new All filter
      }
    // If the All filter is not currently slected and is clicked
    } else if (itemInd === 0 && !allFilter.selected) {  
      // If the All filter is slected while currently false, set all other item selected properties to false
      newList.forEach((item: DdItem, index: number) => {
        if (index === 0) {
          item.selected = true; // Keep All filter true so it can only be made false by clicking another filter
        } else {
          item.selected = false;
        }
      })
    }

    // Dispatches actions to redux store based on which Dropdown is selected
    if (ddHeader === "Price") { 
      dispatch(priceItemToggle(newList));
    } else if (ddHeader === "Categories") {
      dispatch(catItemToggle(newList));
    }
  }

  return (
    <div className="dd-header">

      <div className="dd-header-title" onClick={openDD}>
        { `${ddHeader}  `}
        {ddOpen ? <FontAwesomeIcon icon="angle-up" color="#C8C8C8" /> : <FontAwesomeIcon icon="angle-down" color="#C8C8C8" />}
      </div>
      
      {
        ddOpen &&
        <ul className="dd-list">
          {
            ddList.map((listItem: DdItem, keyInd: number) => (
                <div
                  className="dd-list-item"
                  key={keyInd}
                  onClick={() => selectDdItem(keyInd)}
                >{listItem.selected ? <FontAwesomeIcon icon="check-circle" color="#002B56" /> : <FontAwesomeIcon icon={['far', 'circle']} color="#002B56" />}
                {`  ${listItem.content}`}
                </div>
              )
            )
          }
        </ul>
      }

    </div>
  )
}

// Functional Component is memoized for higher performance
const MemDropdown = React.memo(Dropdown);

export default MemDropdown

