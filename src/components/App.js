import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import withAuth from '../utils/withAuth'

import Layout from './Layout'
import Home from './Home'
import Dinner from './Dinner'
import TopPicks from './TopPicks'
import Lunch from './Lunch'
import Brunch from './Brunch'
import Rating from './Rating'
import ChefPage from './ChefPage'
import MealModal from './MealModal'
import Eventpage from './Eventpage'
// import calendar from './calendar'

// import { auth } from '../utils/AuthService'
@withAuth

class App extends Component {

  requireAuth = (nextState, replace) => {
    if (!this.props.auth.isSignedIn) {
      replace({ pathname: '/' })
    }
  }
  // constructor (props) {
  //   super(props)
  //
  // // Trigger a re-render when the auth state has changed.
  //   auth.onUpdate = () => this.forceUpdate()
  // }

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        {/* <Route path='/enter' component={Enter} /> */}
        <IndexRoute component={Home} />
        <Route path='dinner' component={Dinner} />
        <Route path='toppicks' component={TopPicks}>
          <Route path=':slug' component={MealModal} />
        </Route>
        <Route path='lunch' component={Lunch} />
        <Route path='brunch' component={Brunch} />
        <Route path='rating' component={Rating} />
        <Route path='chefpage' component={ChefPage} />
        <Route path='eventpage' component={Eventpage} />
      </Route>
    </Router>
  }
}

export default App
