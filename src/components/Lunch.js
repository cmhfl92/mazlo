import React, { Component } from 'react'
import { Link } from 'react-router'

class Lunch extends Component {

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
          <img className='top' src='https://static.pexels.com/photos/27642/pexels-photo-27642.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/248422/pexels-photo-248422.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/24565/pexels-photo-24565.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/209564/pexels-photo-209564.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/47725/hamburger-food-meal-tasty-47725.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/65131/pexels-photo-65131.jpeg' width='300' />
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

export default Lunch
