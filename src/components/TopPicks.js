import React, { Component } from 'react'
import { Link } from 'react-router'
// import data from '../../data.json'
import SessionButton from './SessionButton'

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
          <img className='top' src={meal.photos[0].url} width={300} />
        </Link>
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
      <SessionButton />
      <ul className='top'>
        {mealTypes}
      </ul>
      {this.props.children}
    </div>
  }
}

export default TopPicks
