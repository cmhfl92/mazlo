import React, { Component } from 'react'
import { Link } from 'react-router'

class Eventpage extends Component {

  render () {
    return <div>
      <nav className='secureseat'>
        <h2>Secure Seat</h2>
        <Link to='/'><img className='secure' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link>
      </nav>

      <div className='heading'>
        <h2>SALMON BUTTERED DISH</h2>
        <img src='https://cdn3.iconfinder.com/data/icons/business-life-1/532/placeholder_map_marker_position_pinpoint-512.png' width='20' />
        <p>St. Petersburg, Florida</p>
        <h2>Massimo, L.</h2>
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>

      <div className='dates'>
        <h4>Dates Available</h4>
        <p>11/13/17</p> <p>5/14/17</p> <p>6/9/17</p>
      </div>

      <div className='seats'>
        <p>Standard Menu</p>
        <p>{this.props.price} $9</p>
      </div>

      <Link className='continue' to=''>Continue</Link>
    </div>
  }
}
export default Eventpage
