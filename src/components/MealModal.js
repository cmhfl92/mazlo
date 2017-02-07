import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import loadingAnimation from '../images/loading.gif'

class MealModal extends Component {

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
    const url = `https://mazloeats.herokuapp.com/offered_meals/${this.props.params.slug}.json`
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
      content = <div>
        <h3>{this.state.meal.name}</h3>
        <img className='top' src={this.state.photos[0].url} width='300' />
        <div className='rating'>
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <p>{this.state.meal.ingredients}</p>
        <Link className='continue' to={`/event/${this.state.event.id}`}>Continue</Link>
      </div>
    } else {
      content = <div className='loading'>
        <img src={loadingAnimation} alt='Loading...' width='300' />
      </div>
    }

    return <div className='mealModal' onClick={this.dismiss}>
      <section>
        {content}
      </section>
    </div>
  }
}

export default MealModal
