import React, { Component } from 'react'
import SessionButton from './SessionButton'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div>
      {/* <header>
        <h1>Mazlo</h1>
      </header> */}
      {this.props.children}
      <SessionButton />
      <footer>
        &copy; Christa Hegedus with &hearts; at the Iron Yard.
      </footer>
    </div>
  }
}

export default Layout
