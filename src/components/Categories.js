import React, { Component } from 'react'
import { Link } from 'react-router'

class Categories extends Component {

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
    </div>
  }
}

export default Categories
