import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommenBox'
import styled from 'styled-components'

const Wrap = styled.div``
const Upper = styled.div`
  display: flex;
  background: #00bcd4;
`

const Bottom = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
`

class Post extends Component {
  render() {
    return (
      <div>
        <Wrap>
          <Upper>
            <PostBody />
          </Upper>
          <Bottom>
            <CommentBox />
          </Bottom>
        </Wrap>
      </div>
    )
  }
}
export default Post
