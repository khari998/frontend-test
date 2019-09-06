import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react'

interface ratingProp {
  rating: number
}

export default function StarRating({ rating }: ratingProp) {
  // Builds array of star icons according to rating
  const starArr: any = []; // Assigned to type any due to issue with FontAwesomeIcon type
  for (let i = 0; i < 5; i++) { // Always gives 5 stars, uses i for unique key
    if (rating >= 1) { // Logic for full stars
      starArr.push(<FontAwesomeIcon icon={['fas', 'star']} key={i} />)
    } else if (rating > 0 && rating < 1) { // Accounts for half stars
      starArr.push(<FontAwesomeIcon icon="star-half-alt" key={i} />)
    } else { // Otherwise push empty star
      starArr.push(<FontAwesomeIcon icon={['far', 'star']} key={i} />)
    }
    rating-- // Decrement rating by 1
  }
  
  return (
    <Fragment>
      { starArr }
    </Fragment>
  )
}
