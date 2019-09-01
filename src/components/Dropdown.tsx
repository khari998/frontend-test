import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ddProps {
  ddList: string[],
  ddHeader: string,

}

export default function Dropdown({ ddList, ddHeader } : ddProps) {
  const ddOpen = false; // handle later with state
  let ddItemSelected = false; // handle later with state
  return (
    <div>
      <div className="dd-wrapper">

        <div className="dd-header" onClick={() => { }}>
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
