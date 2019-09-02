import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';

import { priceDDToggle, catDDToggle } from '../redux/actions/actions';

interface ddProps {
  ddList: string[],
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
  let ddItemSelected = false;
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
              ddList.map((listItem: string, keyInd: number) => (
                <li className="dd-list-item" key={keyInd} onClick={() => {}}>{ ddItemSelected ? <FontAwesomeIcon icon="check-circle" /> : null}{`  ${listItem}`}</li>
                )
              )
            }
          </ul>
        }

      </div>
    </div>
  )
}
