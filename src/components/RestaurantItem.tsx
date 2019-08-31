import * as React from 'react'
import { exRestaurants } from '../models/testdata'

let R = exRestaurants[0];

export default function RestaurantItem() {
  return (
    <div>
      <div className="image">
        <img src={R.img}/>
      </div>
      <div className="title">
        {R.title}
      </div>
      <div className="rating">
        {R.avg_rating}
      </div>
      <div className="details">
        <div>
          {`${R.category} · ${R.cost}`}
        </div>
        <div>
          { R.isOpen ? 'OPEN NOW' : 'CLOSED' }
        </div>
      </div>
      <div className="button">
        <button onClick={() => {}}> Learn More </button>
      </div>
    </div>
  )
}
