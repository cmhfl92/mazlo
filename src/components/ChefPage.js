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
        <table>
          <tbody>
            <tr>
              <td><h3> 1 </h3></td>
              <td><label htmlFor='datetime'>Set a Date and Time</label></td>
              <td><input ref='time' type='datetime-local' /></td>
            </tr>

            <tr>
              <td><h3> 2 </h3></td>
              <td><label htmlFor='ftrlname'>Name of Dish</label></td>
              <td><input ref='dishname' type='text' /></td>
            </tr>

            <tr>
              <td><h3> 3 </h3></td>
              <td><label htmlFor='price'>Price per Dish</label></td>
              <td><input ref='price' type='number' min={1} max={10} /></td>
            </tr>

            <tr>
              <td><h3> 4 </h3></td>
              <td><label htmlFor='description'>Ingredients</label></td>
              <td><textarea ref='ingredients' /></td>
            </tr>

            <tr>
              <td><h3> 5 </h3></td>
              <td><label htmlFor='address'>Address of Event</label></td>
              <td><input ref='address' type='text' /></td>
            </tr>

            <tr>
              <td><h3> 6 </h3></td>
              <td><label htmlFor='number'>Number of Seats Available</label></td>
              <td><input ref='seats' type='number' min={1} /></td>
            </tr>
          </tbody>
        </table>
      </section>

      <button onClick={this._submit} >Submit</button>

    </div>
  }
}
export default ChefPage
