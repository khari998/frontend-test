import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Query } from 'react-apollo'

import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';
import RestaurantReviewItem from './RestaurantReviewItem';
import StarRating from './StarRating';

export default function RestaurantReviews({ match }: any) { // id property is initialized after initial params so any type is used

  // Access restaurant that was clicked by matching the id property to the restaruant held in state
  const selectedRest: Restaurant = useSelector((state: any) => state.restaurants).filter((rest: Restaurant) => rest.resId === match.params.id)[0]
  
  return (
    <Fragment>
      <h1 className="rest-rev-title">{selectedRest.title}</h1>

      <div className="avg-rating-revs">
        <StarRating rating={selectedRest.avg_rating}/>
      </div>

      <div className="text-container">
        <div className="meta-left">
          {`${selectedRest.category} · ${selectedRest.cost}`}
        </div>
        <div className="meta-right">
          {selectedRest.isOpen ? <FontAwesomeIcon icon="circle" color="green" /> : <FontAwesomeIcon icon="circle" color="red" />}
          {selectedRest.isOpen ? '  OPEN NOW' : '  CLOSED'}
        </div>
      </div>

      <div>
        {`${selectedRest.location}`}
      </div>

      <div>
        {`${selectedRest.totReviews}  Reviews`}
      </div>

      <div>
        {selectedRest.reviews.map((review: Review) => <RestaurantReviewItem review={review} key={review.revId} />)}
      </div>
      
    </Fragment>
  )
}

