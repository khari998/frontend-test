import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';
import RestaurantReviewItem from './RestaurantReviewItem';

export default function RestaurantReviews({ match }: any) { // id property is initialized after initial params so any type is used

  // Access restaurant that was clicked by matching the id property to the restaruant held in state
  const selectedRest = useSelector((state: any) => state.restaurants).filter((rest: Restaurant) => rest.resId === match.params.id)[0]
  console.log(selectedRest);
  // Builds array of star icons according to rating -- copied from RestaurantListItem
  const starArr: any = []; // Assigned to type any due to issue with FontAwesomeIcon type
  let count: number = selectedRest.avg_rating; // Temporary store for rating
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
    <Fragment>
      <h1 className="rest-rev-title">{selectedRest.title}</h1>

      <div className="avg-rating-revs">
        {starArr}
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
        {"MAP COMPONENT"}
      </div>

      <div>
        {`${selectedRest.reviews.length}  Reviews`}
      </div>

      <div>
        {selectedRest.reviews.map((review: Review) => <RestaurantReviewItem review={review} key={review.revId} />)}
      </div>
      
    </Fragment>
  )
}

