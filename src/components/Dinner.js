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
    // const mealTypes = this.state.items.map((meal, i) => {
    //   return <li key={i}>
    //     <Link to={`/dinner/${meal.id}`} activeClassName='active'>
    //       {meal.meal.name}
    //     </Link>
    //     {meal.meal.ingredients}
    //     {meal.price / 100}
    //     <img src={meal.photos[0].url} width={300} />
    //   </li>
    // })
    return <div>
      <nav className='categories'>
        <ul>
          <li><Link to='/'><img className='navlogo' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
          <li><Link to='/toppicks'>Top Picks</Link></li>
          <li><Link to='/dinner'>Dinner</Link></li>
          <li><Link to='/lunch'>Lunch</Link></li>
          <li><Link to='/brunch'>Brunch</Link></li>
          <li><SessionButton /></li>
        </ul>
      </nav>
      {/* {mealTypes} */}
      <SessionButton />
      <ul className='top collage'>
        <li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/96619/pexels-photo-96619.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/26926/pexels-photo.jpg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/65175/pexels-photo-65175.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/236798/pexels-photo-236798.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/69482/pexels-photo-69482.jpeg)`}} /></li>
        </li>
      </ul>
    </div>
  }
}

export default Dinner
