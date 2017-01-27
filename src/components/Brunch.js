import React, { Component } from 'react'
import { Link } from 'react-router'

class Brunch extends Component {

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
        <li><img className='top' src='https://static.pexels.com/photos/128865/pexels-photo-128865.jpeg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/221150/pexels-photo-221150.jpeg' width='300' /></li>
        <li><img className='top' src='https://static.pexels.com/photos/101533/pexels-photo-101533.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/245513/pexels-photo-245513.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/236813/pexels-photo-236813.jpeg' width='300' /></li>
        <li><img className='bottom' src='https://static.pexels.com/photos/139746/pexels-photo-139746.jpeg' width='300' /></li>
      </ul>
    </div>
  }
}

export default Brunch
