import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../../data.json'
import SessionButton from './SessionButton'

class Dinner extends Component {

  state = {
    items: []
  }

  static propTypes = {
    children: React.PropTypes.element
  }

  componentDidMount () {
    const url = 'https://mazloeats.herokuapp.com/offered_meals.json'
    window.fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        items: data
      })
    })
  }

  render () {
    const mealTypes = this.state.items.map((meal, i) => {
      return <li key={i}>
        <Link to={`/dinner/${meal.id}`} activeClassName='active'>
          {meal.meal.name}
        </Link>
        {meal.meal.ingredients}
        {meal.price / 100}
        <img src={meal.photos[0].url} width={300} />
      </li>
    })
    return <div>
      <nav className='categories'>
        <ul>
          <li><Link to='/'><img className='navlogo' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
          <li><Link to='/toppicks'>Top Picks</Link></li>
          <li><Link to='/dinner'>Dinner</Link></li>
          <li><Link to='/lunch'>Lunch</Link></li>
          <li><Link to='/brunch'>Brunch</Link></li>
        </ul>
      </nav>
      {mealTypes}
      <SessionButton />
      <ul className='top'>
        <li>
          <img className='top' src='https://static.pexels.com/photos/96619/pexels-photo-96619.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/26926/pexels-photo.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='top' src='https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/65175/pexels-photo-65175.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li>
          <img className='bottom' src='https://static.pexels.com/photos/69482/pexels-photo-69482.jpeg' width='300' />
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

export default Dinner
