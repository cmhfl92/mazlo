import React, { Component } from 'react'
import { Link } from 'react-router'

class ChefPage extends Component {

  // Pick a Day and Time-react input calendar
  // Choose A Meal
  // Choose a Price
  // Choose Ingredients
  // Choose Address
  // Choose Total Number of Guests Allowed

  render () {
    return <div className='chefcanvas'>
      <div className='chefhaze' />
      <li className='chefpage'><Link to='/'><img className='chefpage' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
      <h1> Create a Sense of Community</h1>
    </div>
  }
}
export default ChefPage
