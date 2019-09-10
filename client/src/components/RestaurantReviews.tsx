

import * as React from 'react'
import * as moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Query } from 'react-apollo'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'


import { Restaurant, Review } from '../models/models'
import { Fragment } from 'react';
import RestaurantReviewItem from './RestaurantReviewItem';
import StarRating from './StarRating';



export default function RestaurantReviews({ match }: any) { // id property is initialized after initial params so any type is used

  const starSize = '2x'; // Sizing for avg_rating stars
  
  // Access restaurant that was clicked by matching the id property to the restaruant held in state
  const selectedRest: Restaurant = useSelector((state: any) => state.restaurants).filter((rest: Restaurant) => rest.resId === match.params.id)[0]
  
  const restPosition = { lat: selectedRest.coordinates[0], lng: selectedRest.coordinates[1] }

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={restPosition}
      >
        <Marker
          position={restPosition}
          icon={{
            url: '../assets/MapMarker.png',
            scaledSize: new google.maps.Size(50, 88)
          }}
        ></Marker>
      </GoogleMap>
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  const OutputMap = () => {
    return (
      <div style={{ height: '30vw', width: '94.5vw' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    )
  }

  return (
    <Fragment>

      <div className="rest-rev-container">
        <h1 className="rest-rev-title">{selectedRest.title}</h1>

        <div className="rest-rev-avg-rating">
          <StarRating rating={selectedRest.avg_rating} size={starSize}/>
        </div>


        <div className="rest-rev-meta-left">
          {`${selectedRest.category.reduce((newStr: string, cat: string, ind: number, arr: string[]) => ind !== arr.length - 1 ? newStr.concat(`${cat}, `) : newStr.concat(`${cat} `), '')} · ${selectedRest.cost}`}
        </div>
        
        <div className="rest-rev-meta-right">
          {selectedRest.isOpen ? <FontAwesomeIcon icon="circle" color="#00E8A4" /> : <FontAwesomeIcon icon="circle" color="#FF3548" />}
          {selectedRest.isOpen ? '  Open Now' : '  Closed'}
        </div>
      </div>

      <div className="rest-rev-map">
        <OutputMap/>
        <div className="rest-rev-address">
          {selectedRest.location}
        </div>
      </div>

      
      <div className="rest-rev-num-revs">
        {`${selectedRest.totReviews}  Reviews`}
      </div>

      <div>
        {selectedRest.reviews.map((review: Review) => <RestaurantReviewItem review={review} key={review.revId} />)}
      </div>
      
    </Fragment>
  )
}

