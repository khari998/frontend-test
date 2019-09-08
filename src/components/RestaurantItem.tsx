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

          <div className="card-rating">
            <StarRating rating={ R.avg_rating } />
          </div>

          <div className="card-text">
            <div className="text-container">
              <div className="meta-left">
                { R.category.map((str, ind) => <div key={ind}>{str}</div>) }
              </div>
              <div className="meta-center">
                { `· ${R.cost}`}
              </div>
              <div className="meta-right">
                {R.isOpen ? <FontAwesomeIcon icon="circle" color="#00E8A4" /> : <FontAwesomeIcon icon="circle" color="#FF3548"/> }
                { R.isOpen ? '  OPEN NOW' : '  CLOSED' }
              </div>
            </div>
          </div>

          <button className="card-button btn-block" onClick={() => {}}> 
            <Link to={`/reviews/${R.resId}`} style={{ color: '#FFF' }}>LEARN MORE</Link>
          </button>
        
        </div>
      </div>
    </li>
  )
}
