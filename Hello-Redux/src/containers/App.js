import React, { Component } from 'react'
import Main from '../components/Main'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { fetchComments } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
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
  fetchPosts,
  fetchComments
})(App)
