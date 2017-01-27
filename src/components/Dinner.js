import React, { Component } from 'react'
import { Link } from 'react-router'

class Dinner extends Component {

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
        <li><img className='top' src='https://static.pexels.com/photos/96619/pexels-photo-96619.jpeg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/26926/pexels-photo.jpg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/65175/pexels-photo-65175.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/69482/pexels-photo-69482.jpeg' width='300' /></li>
      </ul>
    </div>
  }
}

export default Dinner
