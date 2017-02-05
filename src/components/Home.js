import React, { Component } from 'react'
import { Link } from 'react-router'
import SessionButton from './SessionButton'
// import ScrollAnim from 'rc-scroll-anim'

class Home extends Component {

  render () {
    // const ScrollAnimLink = ScrollAnim.Link

    return <div>
      <div className='picture'>
        <header className='home' />
        <div className='haze' />
        <img className='logo' src='https://github.com/cmhfl92/mazlo/blob/master/24fullwhite.png?raw=true' />
        <h1 className='catcher'>Meet. Eat. Repeat.<h1 className='phrase'>Share unique meals and experiences with new friends.</h1></h1>
        <i className='fa fa-chevron-down faa-float animated' aria-hidden='true' />
        {/* <h2 className='phrase'>Share unique meals and experiences with new friends.</h2> */}
        {/* <img className='bounce' src='http://www.autovitals.com/wp-content/uploads/white-arrow-down.png' width='40' /> */}

        {/* <ScrollAnimLink to='home' aria-hidden='true' /> */}
      </div>

      <p className='values'>
        <section className='para'>
          <h2>OUR VALUES</h2>
                Everyone deserves access to healthy food at an affordable cost. <br />
                No one should ever go without a meal.<br />
                No one should ever be forced to eat alone.<br />
        </section>
      </p>
      <div className='guestpicture' />
      <p className='guest'>
        <section className='para'>
          <h2>LET'S EAT!</h2>
          You like to eat, and so do we. Enjoy the food you want with new friends.
          <nav className='guest'>
            <Link className='guest' to='/TopPicks'>Continue</Link>
          </nav>
        </section>
      </p>
      <p className='chef'>
        <section className='para'>
          <h2>LET'S COOK!</h2>
          You know where the magic happens... in the kitchen! Make all of your favorite meals with new friends to share them with.
          <nav className='chef'>
            <SessionButton />
            <Link className='chef' to='/ChefPage'>Continue</Link>
          </nav>
        </section>
      </p>
    </div>
  }
}

export default Home
