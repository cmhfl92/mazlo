import React, { Component } from 'react'
import { Link } from 'react-router'

class ChefPage extends Component {

  // Pick a Day and Time-react input calendar
  // Choose A Meal
  // Choose a Price
  // Choose Ingredients
  // Choose Address
  // Choose Total Number of Guests Allowed

  render () {
    // <input type='number' min={1} max={8} value={this.state.guestCount} onChange={(e) => this.setState({guestCount: e.target.value})} />
    return <div className='chefdiv'>
      <header className='chefcanvas'>
        {/* <RangeCalendar onSelect={this._dateselected} /> */}
        {/* <div className='chefhaze' /> */}
        <li className='chefpage'><Link to='/'><img className='chefpage' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
      </header>
      <div>
        <h1> Create a Sense of Community</h1>
        <form>
          <p>
            <h3> 1 </h3>
            <label htmlFor='datetime'>Set a Date and Time</label>
            <input name='time' type='datetime-local' />
          </p>
          <p>
            <h3> 2 </h3>
            <label htmlFor='fullname'>Name of Dish</label>
            <input name='dishname' type='text' />
          </p>
          <p>
            <h3> 3 </h3>
            <label htmlFor='price'>Price per Dish</label>
            <input price='number' type='number' min={1} max={10} />
          </p>
          <p>
            <h3> 4 </h3>
            <label htmlFor='description'>Ingredients</label>
            <textarea cols='30' rows='5' />
          </p>
          <p>
            <h3> 5 </h3>
            <label htmlFor='address'>Address of Event</label>
            <input name='address' type='adress' />
          </p>
          <p>
            <h3> 6 </h3>
            <label htmlFor='number'>Number of Seats Available</label>
            <input number='seats' type='number' min={1} />
          </p>
          <p>
            <button type='submit'>Submit</button>
          </p>
        </form>
      </div>
    </div>
  }
}
export default ChefPage
