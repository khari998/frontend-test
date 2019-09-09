import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';
import StarRating from './StarRating'

interface reviewsProp {
  review: Review,
}

export default function RestaurantReviewItem({ review } : reviewsProp) {
  

  return (
    <div className="rev-container">
      <div className="rev-img">
        <img src={review.image} />
      </div>

      <div className="rev-meta">
        <div className="rev-name">
          { review.name }
        </div>
        <div className="rev-date">
          { review.date }

        </div>
      </div>

      <div className="rev-rating-text">
        <div className="rev-rating">
          <StarRating rating={ review.rating }/>
        </div>

        <div className="rev-text">
          { review.review }
        </div>
      </div>
    </div>
  )
}
