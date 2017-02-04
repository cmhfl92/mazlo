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
      <header className='chefcanvas'>
        {/* <RangeCalendar onSelect={this._dateselected} /> */}
        {/* <div className='chefhaze' /> */}
        <li className='chefpage'><Link to='/'><img className='chefpage' src='https://github.com/cmhfl92/mazlo/blob/master/24white.png?raw=true' /></Link></li>
      </header>
      <h1> Create a Sense of Community</h1>
      <section>
        <div>
          <h3> 1 </h3>
          <div>
            <label htmlFor='datetime'>Set a Date and Time</label>
            <input name='time' type='datetime-local' />
          </div>
        </div>
        <div>
          <h3> 2 </h3>
          <div>
            <label htmlFor='fullname'>Name of Dish</label>
            <input name='dishname' type='text' />
          </div>
        </div>
        <div>
          <h3> 3 </h3>
          <div>
            <label htmlFor='price'>Price per Dish</label>
            <input name='price' type='number' min={1} max={10} />
          </div>
        </div>
        <div>
          <h3> 4 </h3>
          <div>
            <label htmlFor='description'>Ingredients</label>
          </div>
          <textarea />
        </div>
        <div>
          <h3> 5 </h3>
          <div>
            <label htmlFor='address'>Address of Event</label>
            <input name='address' type='adress' />
          </div>
        </div>
        <div>
          <h3> 6 </h3>
          <div>
            <label htmlFor='number'>Number of Seats Available</label>
            <input name='seats' type='number' min={1} />
          </div>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </section>
    </div>
  }
}
export default ChefPage
