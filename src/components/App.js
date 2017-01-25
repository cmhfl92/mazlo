import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Categories from './Categories'
import Dinner from './Dinner'
import TopPicks from './TopPicks'
import Lunch from './Lunch'
import Brunch from './Brunch'
import Rating from './Rating'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        {/* <Route path='/enter' component={Enter} /> */}
        <Route path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/dinner' component={Dinner} />
        <Route path='/toppicks' component={TopPicks} />
        <Route path='/lunch' component={Lunch} />
        <Route path='/brunch' component={Brunch} />
        <Route path='/rating' component={Rating} />
      </Route>
    </Router>
  }
}

export default App
