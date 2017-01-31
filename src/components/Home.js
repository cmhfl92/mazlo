import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div>
      <div className='picture'>
        <header className='home' />
        <div className='haze' />
        <img className='bounce' src='http://www.autovitals.com/wp-content/uploads/white-arrow-down.png' width='40' />
        <img className='logo' src='https://github.com/cmhfl92/mazlo/blob/master/24fullwhite.png?raw=true' />
      </div>
      <p className='values'>
        <section className='para'>
          <h2>OUR VALUES</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
        </section>
      </p>
      <p className='guest'>
        <section className='para'>
          <h2>BECOME OUR GUEST</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
        <nav className='guest'>
          <Link className='guest' to='/TopPicks'>Continue</Link>
        </nav>
        </section>
      </p>
      <p className='chef'>
        <section className='para'>
          <h2>BECOME A CHEF</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
      <nav className='chef'>
        <Link className='chef' to='/ChefPage'>Continue</Link>
      </nav>
        </section>
      </p>
    </div>
  }
}

export default Home
