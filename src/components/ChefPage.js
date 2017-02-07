import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import auth from '../utils/auth'

class ChefPage extends Component {

  // Pick a Day and Time-react input calendar
  // Choose A Meal
  // Choose a Price
  // Choose Ingredients
  // Choose Address
  // Choose Total Number of Guests Allowed
  // image upload

  _submit = (event) => {
    event.preventDefault()
    const url = 'https://mazloeats.herokuapp.com/events'
    window.fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${auth.token}`,
        'Content-Type': `application/json`
      },
      body: JSON.stringify({
        event: {
          time: this.refs.time.value,
          seats: this.refs.seats.value,
          price: this.refs.price.value,
          dishname: this.refs.dishname.value,
          ingredients: this.refs.ingredients.value,
          address: this.refs.address.value
        }
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      browserHistory.push('/toppicks')
    })
    // Send a JSON object to the API.
  }

  render () {
    // <input type='number' min={1} max={8} value={this.state.guestCount} onChange={(e) => this.setState({guestCount: e.target.value})} />
    return <div className='chefdiv'>
      <div className='chefpicture' />
      <div className='chefhaze' />
      <li className='chefpage'><Link to='/'><img className='chefpage' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
      <h1> Create a Sense of <h1 className='community'>Community</h1></h1>

      <h2 className='steps'>It's easy as steps 1 through 6...</h2>

      <section className='chefinfo'>
        <ul>
          <li><h3> 1 </h3></li>
          <li><label htmlFor='datetime'>Set a Date and Time</label></li>
          <li><input ref='time' type='datetime-local' /></li>
        </ul>

        <ul>
          <li><h3> 2 </h3></li>
          <li><label htmlFor='fullname'>Name of Dish</label></li>
          <li><input ref='dishname' type='text' /></li>
        </ul>

        <ul>
          <li><h3> 3 </h3></li>
          <li><label htmlFor='price'>Price per Dish</label></li>
          <li><input ref='price' type='number' min={1} max={10} /></li>
        </ul>

        <ul>
          <li><h3> 4 </h3></li>
          <li><label htmlFor='description'>Ingredients</label></li>
          <li><textarea ref='ingredients' /></li>
        </ul>

        <ul>
          <li><h3> 5 </h3></li>
          <li><label htmlFor='address'>Address of Event</label></li>
          <li><input ref='address' type='text' /></li>
        </ul>

        <ul>
          <li><h3> 6 </h3></li>
          <li><label htmlFor='number'>Number of Seats Available</label></li>
          <li><input ref='seats' type='number' min={1} /></li>
        </ul>
      </section>

      <button onClick={this._submit} >Submit</button>

    </div>
  }
}
export default ChefPage
