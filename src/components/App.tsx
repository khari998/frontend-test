import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './Main'
import RestaurantReviews from './RestaurantReviews'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/reviews/:id" component={RestaurantReviews}/>
      </Switch>
    </Router>
  )
}

export default App;
