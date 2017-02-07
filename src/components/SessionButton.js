import React, { Component } from 'react'
import withAuth from '../utils/withAuth'

@withAuth
class SessionButton extends Component {

  handleClick = (e) => {
    e.preventDefault()
    const { auth } = this.props
    auth.isSignedIn
      ? auth.signOut()
      : auth.signIn()
  }

  render () {
    const { auth } = this.props
    return <a onClick={this.handleClick}>
      {auth.isSignedIn ? 'Sign Out' : 'Sign In'}
    </a>
  }
}

export default SessionButton
