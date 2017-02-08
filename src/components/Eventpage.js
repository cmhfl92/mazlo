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
    let content
    console.log(this.state)

    if (this.state.meal) {
      content = <div className='heading'>
        <h2>{this.state.meal.name}</h2>
        <img className='top' src={this.state.photos[0].url} width='300' />
        <h2>{this.state.event.chef.name}</h2>
        <div className='rating'>
          <h4>{this.state.rating}</h4>
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <p><img className='location' src='https://cdn3.iconfinder.com/data/icons/business-life-1/532/placeholder_map_marker_position_pinpoint-512.png' width='20' />St. Petersburg, Florida</p>
        <p>{this.state.meal.ingredients}</p>
        <p className='price'>${this.state.price / 100}</p>
      </div>
    } else {
      content = null
    }
    return <div>
      <nav className='secureseat'>
        <h2>Secure Seat</h2>
        <Link to='/'><img className='secure' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link>
      </nav>

      {content}
      {/* <div className='heading'>
          <h2>CHICKEN BUTTERED DISH</h2>
          <img className='chicken' src='https://static.pexels.com/photos/33406/pexels-photo.jpg' width='300' />
          <h2>Massimo, L.</h2>
          <h4><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></h4>
        </div> */}

      <div className='dates'>
        <h4>Dates Available</h4>
        <ul>
          <li><button>11/13/17</button></li>
          <li><button>11/13/17</button></li>
          <li><button>11/13/17</button></li>
        </ul>
      </div>

      <table className='seats'>
        <td>
          <tr>
            <input name='price' type='number' min={1} placeholder='Select Number of Seats' />
          </tr>
        </td>
      </table>
      <Link className='eventcontinue' to=''>Continue</Link>
    </div>
  }
}
export default Eventpage
