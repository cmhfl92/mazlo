import React, { Component } from 'react'
import { Link } from 'react-router'
// import ScrollAnim from 'rc-scroll-anim'

class Home extends Component {

  render () {
    // const ScrollAnimLink = ScrollAnim.Link

    return <div>
      <div className='picture'>
        <header className='home' />
        <div className='haze' />
        <img className='logo' src='https://github.com/cmhfl92/mazlo/blob/master/24fullwhite.png?raw=true' />
        <h1 className='catcher'>Meet. Eat. Repeat.</h1>
        <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
        {/* <img className='bounce' src='http://www.autovitals.com/wp-content/uploads/white-arrow-down.png' width='40' /> */}

        {/* <ScrollAnimLink to='home' aria-hidden='true' /> */}
      </div>

      <p className='values'>
        <section className='para'>
          <h2>OUR VALUES</h2>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
        </section>
      </p>
      <div className='guestpicture' />
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
