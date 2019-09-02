import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { priceDDToggle, catDDToggle, catItemToggle, priceItemToggle } from '../redux/actions/actions';

import { DdItem } from '../models/models';

interface ddProps { // Defines types for destructured props
  ddList: DdItem[],
  ddHeader: string,
  ddOpen: boolean,
}

export default function Dropdown({ ddList, ddHeader, ddOpen } : ddProps) {

  const dispatch = useDispatch(); // Allows actions to be dispatched to store

  const openDD = () => { // Dispatches actions to redux store based on which Dropdown is clicked
    if (ddHeader === "Price") {
      dispatch(priceDDToggle());
    } else if (ddHeader === "Categories") {
      dispatch(catDDToggle());
    }
  }

  const selectDdItem = (itemInd: number) => { // Change state to new list of DdItems with clicked item selected property changed to true
    const tempList = [...ddList] // Stores previous values of state in copied list  
    const newItem = tempList[itemInd] // Stores clicked price
    newItem.selected = !newItem.selected // Changes selected property on price to opposite value boolean
    tempList[itemInd] = newItem; // Replace old DdItem with updated newItem

    // Dispatches actions to redux store based on which Dropdown is selected
    if (ddHeader === "Price") { 
      dispatch(priceItemToggle(tempList));
    } else if (ddHeader === "Categories") {
      dispatch(catItemToggle(tempList));
    }
  }

  return (
    <div>
      <div className="dd-wrapper">

        <div className="dd-header" onClick={openDD}>
          <div className="dd-header-title">
            { `${ddHeader}  `}
            { ddOpen ? <FontAwesomeIcon icon="angle-up"/> : <FontAwesomeIcon icon="angle-down"/> }
          </div>
        </div>

        { 
          ddOpen &&
          <ul className="dd-list">
            {
              ddList.map((listItem: DdItem, keyInd: number) => (
                  <li className="dd-list-item" key={keyInd} onClick={() => selectDdItem(keyInd)}>{ listItem.selected ? <FontAwesomeIcon icon="check-circle" /> : null}{`  ${listItem.content}`}</li>
                )
              )
            }
          </ul>
        }

      </div>
    </div>
  )
}
