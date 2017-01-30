import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Dinner from './Dinner'
import TopPicks from './TopPicks'
import Lunch from './Lunch'
import Brunch from './Brunch'
import Rating from './Rating'
import ChefPage from './ChefPage'
import MealModal from './MealModal'

// import { auth } from '../utils/AuthService'

class App extends Component {

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
      </Route>
    </Router>
  }
}

export default App
