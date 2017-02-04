import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import loadingAnimation from '../images/loading.gif'

class MealModal extends Component {

  state = {
    meal: null
  }

  static propTypes = {
    children: React.PropTypes.element
  }

  dismiss () {
    browserHistory.goBack()
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
        meal: data
      })
    })
  }

  render () {
    let content

    if (this.state.meal) {
      content = <div>
        <h3>{this.state.meal.title}</h3>
        <img className='top' src={this.state.meal.image} width='300' />
        <div className='rating'>
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <p>{this.state.meal.description}</p>
        <Link className='continue' to=''>Continue</Link>
      </div>
    } else {
      content = <div className='loading'>
        <img src={loadingAnimation} alt='Loading...' width='300' />
      </div>
    }

    return <div className='mealModal' onClick={() => this.dismiss()}>
      <section>
        {content}
      </section>
    </div>
  }
}

export default MealModal
