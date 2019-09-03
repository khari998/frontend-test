import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';

interface reviewsProp {
  review: Review,
}

export default function RestaurantReviewItem({ review } : reviewsProp) {
  const starArr: any = []; // Assigned to type any due to issue with FontAwesomeIcon type
  let count: number = review.rating; // Temporary store for rating
  for (let i = 0; i < 5; i++) { // Always gives 5 stars, uses i for unique key
    if (count >= 1) { // Logic for full stars
      starArr.push(<FontAwesomeIcon icon={['fas', 'star']} key={i} />)
    } else if (count > 0 && count < 1) { // Accounts for half stars
      starArr.push(<FontAwesomeIcon icon="star-half-alt" key={i} />)
    } else { // Otherwise push empty star
      starArr.push(<FontAwesomeIcon icon={['far', 'star']} key={i} />)
    }
    count-- // Decrement rating by 1
  }

  return (
    <div>
      <div className="rev-img">
        {}
      </div>

      <div className="rev-meta">
        <div className="rev-name">
          { review.name }
        </div>
        <div className="rev-date">
          { review.date }

        </div>
      </div>

      <div>
        <div className="rating">
          { starArr }

        </div>

        <div className="rev-text">
          { review.review }
        </div>
      </div>
    </div>
  )
}
