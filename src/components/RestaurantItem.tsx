import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Restaurant } from '../models/models'
import StarRating from './StarRating'

interface rListItemProps {
  R: Restaurant,
}

export default function RestaurantItem({ R }: rListItemProps) {
  return (
    <li className="card-item">
      <div className="card">

        <div className="card-media">
          <img src={ R.img }/>
        </div>

        <div className="card-content">
          
          <div className="card-title">{ R.title }</div>

          <div className="rating">
            <StarRating rating={ R.avg_rating } />
          </div>

          <div className="card-text">
            <div className="text-container">
              <div className="meta-left">
                { R.category.map((str, ind) => <p key={ind}>{str}</p>) } 
                { `· ${R.cost}`}
              </div>
              <div className="meta-right">
                { R.isOpen ? <FontAwesomeIcon icon="circle" color="green" /> : <FontAwesomeIcon icon="circle" color="red"/> }
                { R.isOpen ? '  OPEN NOW' : '  CLOSED' }
              </div>
            </div>
          </div>

          <button className="btn btn-block" onClick={() => {}}> 
            <Link to={`/reviews/${R.resId}`}>LEARN MORE</Link>
          </button>
        
        </div>
      </div>
    </li>
  )
}
