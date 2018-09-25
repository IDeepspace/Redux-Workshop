import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  height: 300px;
`

class PostBody extends Component {
  render() {
    return <Wrap>PostBody</Wrap>
  }
}

export default PostBody
