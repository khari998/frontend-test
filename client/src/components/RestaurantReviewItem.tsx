import * as React from 'react'
import Moment from 'react-moment';

import { Review } from '../models/models'
import StarRating from './StarRating'

interface reviewsProp {
  review: Review,
}

const RestaurantReviewItem = ({ review } : reviewsProp) => (
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

// Functional Component is memoized for higher performance
const MemRestaurantReviewItem = React.memo(RestaurantReviewItem)

export default MemRestaurantReviewItem

