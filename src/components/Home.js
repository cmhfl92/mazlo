import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div>
      <header className='home'><h1>Mazlo</h1></header>
      <p className='values'>
        <h2>Our Values</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
      </p>
      <p className='guest'>
        <h2>Become Our Guest</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
      <nav className='guest'>
        <Link className='guest' to='/TopPicks'>Become Our Guest</Link>
      </nav>
      </p>
      <p className='chef'>
        <h2>Become a Chef</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
      <nav className='chef'>
        <Link className='chef' to='/TopPicks'>Become A Chef</Link>
      </nav>
      </p>
    </div>
  }
}

export default Home
