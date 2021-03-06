import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../../data.json'
import SessionButton from './SessionButton'

class Lunch extends Component {

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
    //     <Link to={`/lunch/${meal.id}`} activeClassName='active'>
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
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/27642/pexels-photo-27642.jpg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/248422/pexels-photo-248422.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/24565/pexels-photo-24565.jpg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/209564/pexels-photo-209564.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/47725/hamburger-food-meal-tasty-47725.jpeg)`}} /></li>
          <li><span style={{backgroundImage: `url(https://static.pexels.com/photos/65131/pexels-photo-65131.jpeg)`}} /></li>
        </li>
      </ul>
    </div>
  }
}

export default Lunch
