import * as React from 'react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dropdown from './Dropdown'
import { Cost, Categories } from '../models/models'

export default function FilterRestaurants() {
  const openFilter = true;
  return (
    <Fragment>
      <div className="dd-container">

        <div className="dd-filter">
          {"Filter By:" }
        </div>

        <div className="dd-open">
          { openFilter ? <FontAwesomeIcon icon={['far', 'dot-circle']} />  : <FontAwesomeIcon icon={['far', 'circle']} /> }
          {'  Open Now'}
        </div>

        <div className="dd-dd1">
          <Dropdown ddList={Cost} ddHeader="Price"></Dropdown>
        </div>

        <div className="dd-dd2">
          <Dropdown ddList={Categories} ddHeader="Categories"></Dropdown>
        </div>

        <div className="dd-button">
          <button className="btn btn-block" onClick={() => { }}> CLEAR ALL </button>
        </div>

      </div>
    </Fragment>
  )
}
