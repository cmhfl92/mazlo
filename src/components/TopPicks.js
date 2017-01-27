import React, { Component } from 'react'
import { Link } from 'react-router'

class TopPicks extends Component {

  render () {
    return <div>
      <nav className='categories'>
        <ul>
          <li><Link to='/toppicks'>Top Picks</Link></li>
          <li><Link to='/dinner'>Dinner</Link></li>
          <li><Link to='/lunch'>Lunch</Link></li>
          <li><Link to='/brunch'>Brunch</Link></li>
        </ul>
      </nav>
      <ul className='topimage'>
        <li><img className='top' src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/33406/pexels-photo.jpg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/8758/food-dinner-lemon-rice.jpg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/128388/pexels-photo-128388.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/5506/bread-food-salad-sandwich.jpg' width='300' /></li>
      </ul>
    </div>
  }
}

export default TopPicks
