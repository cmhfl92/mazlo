import React, { Component } from 'react'
import { Link } from 'react-router'

class ChefPage extends Component {

  // Pick a Day and Time-react input calendar
  // Choose A Meal
  // Choose a Price
  // Choose Ingredients
  // Choose Address
  // Choose Total Number of Guests Allowed
  // image upload

  render () {
    // <input type='number' min={1} max={8} value={this.state.guestCount} onChange={(e) => this.setState({guestCount: e.target.value})} />
    return <div className='chefdiv'>
      <div className='chefpicture' />
      <div className='chefhaze' />
      <li className='chefpage'><Link to='/'><img className='chefpage' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
      <h1> Create a Sense of <h1 className='community'>Community</h1></h1>

      <h2 className='steps'>It's easy as steps 1 through 6...</h2>

      <section className='chefinfo'>
        <h3> 1 </h3>
        <label htmlFor='datetime'>Set a Date and Time</label>
        <input name='time' type='datetime-local' />

        <h3> 2 </h3>
        <label htmlFor='fullname'>Name of Dish</label>
        <input name='dishname' type='text' />

        <h3> 3 </h3>
        <label htmlFor='price'>Price per Dish</label>
        <input name='price' type='number' min={1} max={10} />

        <h3> 4 </h3>
        <label htmlFor='description'>Ingredients</label>
        <textarea />

        <h3> 5 </h3>
        <label htmlFor='address'>Address of Event</label>
        <input name='address' type='adress' />

        <h3> 6 </h3>
        <label htmlFor='number'>Number of Seats Available</label>
        <input name='seats' type='number' min={1} />

        <div>
          <button type='submit'>Submit</button>
        </div>
      </section>
    </div>
  }
}
export default ChefPage
