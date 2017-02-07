import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import withAuth from '../utils/withAuth'

// import ScrollAnim from 'rc-scroll-anim'

@withAuth
class Home extends Component {

  _continue = (event) => {
    event.preventDefault()
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
        <nav className='homey'>
          <a className='chef' onClick={this._continue}>Let's Cook</a>
          <Link className='guest' to='/TopPicks'>Let's Eat</Link>
        </nav>
      </div>
    </div>
  }
}

export default Home
