import React, { Component } from 'react'
import { Link } from 'react-router'

class Categories extends Component {

  render () {
    return <div>
      <nav>
        <ul>
          <li><Link to='/toppicks'>Top Picks</Link></li>
          <li><Link to='/dinner'>Dinner</Link></li>
          <li><Link to='/lunch'>Lunch</Link></li>
          <li><Link to='/brunch'>Brunch</Link></li>
        </ul>
      </nav>
      <h2>Categories</h2>
    </div>
  }
}

export default Categories
