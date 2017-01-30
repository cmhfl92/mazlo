import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import loadingAnimation from '../images/loading.gif'

class MealModal extends Component {

  state = {
    meal: null
  }

  dismiss () {
    browserHistory.goBack()
  }

  componentDidMount () {
    // TODO: fetch the meal info from the api, using the slug,
    // instead of the time out.
    setTimeout(() => {
      this.setState({
        // Will be data from API
        meal: {
          title: 'Dishwasher Cooked Poached Salmon',
          image: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2013/08/Dishwasher-Cooked-Poached-Salmon.jpg',
          description: 'Ingredients: Lemon buttered salmon with a trist of basil to enhance the satisfying feeling of enjoyment. Sides: Mashed potatoes crowned with corn Mexican salsa.'
        }
      })
    }, 600)
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
