import * as React from 'react'

interface ddProps {
  ddList: string[],
  ddHeader: string,
  className: string,
}

export default function Dropdown({ ddList, ddHeader } : ddProps) {
  return (
    <div>
      <div className="dd-wrapper">

        <div className="dd-header" onClick={() => { }}>
          <div className="dd-header-title">{ddHeader}</div>
        </div>

        <ul className="dd-list">
          {
            ddList.map((listItem: string, keyInd: number) => (
              <li className="dd-list-item" key={keyInd}>{listItem}</li>
              )
            )
          }
        </ul>
        
      </div>
    </div>
  )
}
