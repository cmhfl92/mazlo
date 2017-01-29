import React, { Component } from 'react'
import { Link } from 'react-router'

class Brunch extends Component {

  render () {
    return <div>
      <nav className='categories'>
        <ul>
          <li><Link to='/'><img className='navlogo' src='https://github.com/cmhfl92/mazlo/blob/master/White-logo-Mazlo.png?raw=true' /></Link></li>
          <li><Link to='/toppicks'>Top Picks</Link></li>
          <li><Link to='/dinner'>Dinner</Link></li>
          <li><Link to='/lunch'>Lunch</Link></li>
          <li><Link to='/brunch'>Brunch</Link></li>
        </ul>
      </nav>

      <ul className='top'>
        <li>
          <img className='top' src='https://static.pexels.com/photos/128865/pexels-photo-128865.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/221150/pexels-photo-221150.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/101533/pexels-photo-101533.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/245513/pexels-photo-245513.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/236813/pexels-photo-236813.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/139746/pexels-photo-139746.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
      </ul>
    </div>
  }
}

export default Brunch
