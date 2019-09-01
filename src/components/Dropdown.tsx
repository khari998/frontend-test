import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ddProps {
  ddList: string[],
  ddHeader: string,
  className: string,
}

export default function Dropdown({ ddList, ddHeader } : ddProps) {
  const ddOpen = true;
  return (
    <div>
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => { }}>
          <div className="dd-header-title">{ddHeader}</div>
          {
            ddOpen ? <FontAwesomeIcon icon="angle-up"/> : <FontAwesomeIcon icon="angle-down"/>
          }
        </div>

        { 
          ddOpen &&
          <ul className="dd-list">
            {
              ddList.map((listItem: string, keyInd: number) => (
                  <li className="dd-list-item" key={keyInd}>{listItem}</li>
                )
              )
            }
          </ul>
        }

      </div>
    </div>
  )
}
