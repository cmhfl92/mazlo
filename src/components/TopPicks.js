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
        <li><img className='top' src='http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/08/Dishwasher-Cooked-Poached-Salmon.jpg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
        <li><img className='top' src='https://static.pexels.com/photos/33406/pexels-photo.jpg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
        <li><img className='top' src='https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
        <li><img className='bottom' src='https://static.pexels.com/photos/8758/food-dinner-lemon-rice.jpg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
        <li><img className='bottom' src='https://static.pexels.com/photos/128388/pexels-photo-128388.jpeg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
        <li><img className='bottom' src='http://www.blogto.com/upload/2014/07/20140801-fooddudes2.jpg' width='300' />
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <button onClick=''>Continue</button>
        </li>
      </ul>
    </div>
  }
}

export default TopPicks
