import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

import { Restaurant, Review } from '../models/models'
import StarRating from './StarRating'

interface reviewsProp {
  review: Review,
}

export default function RestaurantReviewItem({ review } : reviewsProp) {
  
  return (
    <div className="rev-container">

      <div className="rev-img-container">
        <img src={review.image} className="rev-img"/>
      </div>

      <div className="rev-meta">
        <div className="rev-name">
          { review.name }
        </div>
        <div className="rev-date">
          <Moment date={review.date} format="MM/DD/YYYY"></Moment>
        </div>
      </div>

      <div className="rev-rating-text">
        <div className="rev-rating">
          <StarRating rating={ review.rating } />
        </div>

        <p className="rev-text">
          { review.review }
        </p>
      </div>
    </div>
  )
}
