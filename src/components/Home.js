import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import withAuth from '../utils/withAuth'

// import ScrollAnim from 'rc-scroll-anim'

@withAuth
class Home extends Component {

  _continue = () => {
    const { auth } = this.props
    if (auth.isSignedIn) {
      browserHistory.push('/chefpage')
    } else {
      auth.signIn()
    }
  }

  render () {
    // const ScrollAnimLink = ScrollAnim.Link

    return <div>
      <div className='picture'>
        <header className='home' />
        <div className='haze' />
        <img className='logo' src='https://github.com/cmhfl92/mazlo/blob/master/24fullwhite.png?raw=true' width='130' />
        <h1 className='catcher'>Meet. Eat. Repeat.<h2 className='phrase'>Share unique meals and experiences with new friends.</h2></h1>
        <nav className='chef'>
          <button className='chef' onClick={this._continue}>Let's Cook</button>
        </nav>
        <nav className='guest'>
          <button className='guest' onClick='/TopPicks'>Let's Eat</button>
        </nav>
        {/* <Link className='guest' to='/TopPicks'>Continue</Link> */}

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
          {/* <nav className='chef'>
            <button className='chef' onClick={this._continue}>Continue</button>
          </nav> */}
        </section>
      </p>
    </div>
  }
}

export default Home
