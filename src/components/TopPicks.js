import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../../data.json'

class TopPicks extends Component {

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

  // componenet did mount. fetching API--> portfolio 2//

  render () {
    const mealTypes = this.state.items.map((meal, i) => {
      return <li key={i}>
        <Link to={`/toppicks/${meal.id}`} activeClassName='active'>
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
      <h1>STATIC FROM HERE</h1>
      <ul className='top'>
        <li>
          <Link to={`/toppicks/poached-salmon`}>
            <img className='top' src='http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/08/Dishwasher-Cooked-Poached-Salmon.jpg' width='300' />
          </Link>
        </li>
        <li><img className='top' src='https://static.pexels.com/photos/33406/pexels-photo.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li><img className='top' src='https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li><img className='bottom' src='https://static.pexels.com/photos/8758/food-dinner-lemon-rice.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li><img className='bottom' src='https://static.pexels.com/photos/128388/pexels-photo-128388.jpeg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
        <li><img className='bottom' src='http://www.blogto.com/upload/2014/07/20140801-fooddudes2.jpg' width='300' />
          <div className='rating'>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <p>Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa. </p>
          <Link className='continue' to=''>Continue</Link>
        </li>
      </ul>
      {this.props.children}
    </div>
  }
}

export default TopPicks
