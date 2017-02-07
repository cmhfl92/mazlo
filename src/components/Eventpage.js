import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class Eventpage extends Component {

  state = {
    loaded: false
  }

  static propTypes = {
    children: React.PropTypes.element
  }

  dismiss = (event) => {
    if (event.target === event.currentTarget) {
      browserHistory.goBack()
    }
  }

  componentDidMount () {
    // TODO: fetch the meal info from the api, using the slug,
    // instead of the time out.
    console.log(this.props)
    const url = `https://mazloeats.herokuapp.com/offered_meals/${this.props.params.id}.json`
    window.fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        loaded: true,
        ...data
      })
    })
  }

  render () {
    return <div>
      <nav className='secureseat'>
        <h2>Secure Seat</h2>
        <Link to='/'><img className='secure' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link>
      </nav>

      <div className='heading'>
        <h2>CHICKEN BUTTERED DISH</h2>
        <img className='chicken' src='https://static.pexels.com/photos/33406/pexels-photo.jpg' width='300' />
        <h2>Massimo, L.</h2>
        <h4><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></h4>
        <img src='https://cdn3.iconfinder.com/data/icons/business-life-1/532/placeholder_map_marker_position_pinpoint-512.png' width='20' />
        <p>St. Petersburg, Florida</p>
      </div>

      <div className='dates'>
        <h4>Dates Available</h4>
        <ul>
          <li><button>11/13/17</button></li>
          <li><button>11/13/17</button></li>
          <li><button>11/13/17</button></li>

        </ul>
      </div>

      <div className='seats'>
        <p>Select Number of Seats</p>
        <input name='price' type='number' min={1} />
        <p>{this.props.price} $9</p>
      </div>

      <Link className='continue' to=''>Continue</Link>
    </div>
  }
}
export default Eventpage
