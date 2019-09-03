import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Restaurant } from '../models/models'

interface rListItemProps {
  R: Restaurant,
}

export default function RestaurantItem({ R }: rListItemProps) {

  // Builds array of star icons according to rating
  const starArr: any = []; // Assigned to type any due to issue with FontAwesomeIcon type
  let count: number = R.avg_rating; // Temporary store for rating
  for (let i = 0; i < 5; i++) { // Always gives 5 stars, uses i for unique key
    if (count >= 1) { // Logic for full stars
      starArr.push(<FontAwesomeIcon icon={['fas', 'star']} key={i} />)
    } else if (count > 0 && count < 1) { // Accounts for half stars
      starArr.push(<FontAwesomeIcon icon="star-half-alt" key={i} />)
    } else { // Otherwise push empty star
      starArr.push(<FontAwesomeIcon icon={['far', 'star']} key={i}/>) 
    }
    count-- // Decrement rating by 1
  }
  

  return (
    <li className="card-item">
      <div className="card">

        <div className="card-media">
          <img src={ R.img }/>
        </div>

        <div className="card-content">
          
          <div className="card-title">{ R.title }</div>

          <div className="rating">
            { starArr }
          </div>

          <div className="card-text">
            <div className="text-container">
              <div className="meta-left">
                {`${R.category} · ${R.cost}`}
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
