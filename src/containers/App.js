import React, { Component } from 'react'
import Main from '../components/Main'
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default connect(null, {
  fetchPosts
})(App)
