import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../../data.json'
import SessionButton from './SessionButton'

class Brunch extends Component {

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
    //     <Link to={`/brunch/${meal.id}`} activeClassName='active'>
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

      <ul className='top'>
        <li>
          <img className='top' src='https://static.pexels.com/photos/128865/pexels-photo-128865.jpeg' width='300' />
          <img className='top' src='https://static.pexels.com/photos/221150/pexels-photo-221150.jpeg' width='300' />
          <img className='top' src='https://static.pexels.com/photos/101533/pexels-photo-101533.jpeg' width='300' />
          <img className='bottom' src='https://static.pexels.com/photos/245513/pexels-photo-245513.jpeg' width='300' />
          <img className='bottom' src='https://static.pexels.com/photos/236813/pexels-photo-236813.jpeg' width='300' />
          <img className='bottom' src='https://static.pexels.com/photos/139746/pexels-photo-139746.jpeg' width='300' />
        </li>
      </ul>
    </div>
  }
}

export default Brunch
