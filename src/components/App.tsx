import * as React from 'react'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect'
import FilterRestaurants from './FilterRestaurants';
import RestaurantList from './RestaurantList';
import { updateRestaurants } from '../redux/actions/actions'


const App: React.FC = (): JSX.Element => {
  // Redux hook that allows actions to be dispatched
  const dispatch = useDispatch();

  // Special react hook, default useEffect has issues with async functions
  useAsyncEffect(async () => { // Executes on initial render. Replaces ComponentDidMount
    // Api call to GraphQL endpoint
    // Format data to an array of Restaurant Classes
    // Set redux state to new restaurants from GraphQL endpoint
      // dispatch(updateRestaurants()) -- final array is passed into updateRestaurants
  }, [])

  // Redux hook, grabbing current restaurants on redux store
  const restaurants = useSelector((state: any) => state.restaurants) 

  return (
    <Fragment>
      <h1>Restaurants</h1>
      <p>Browse through a curated list of your favorite restaurants</p>
      <FilterRestaurants />
      <RestaurantList rList={restaurants} />
    </Fragment>
  )
}

export default App;

