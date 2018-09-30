import React, { Component } from 'react'
import styled from 'styled-components'

class PostBody extends Component {
  render() {
    const { comments } = this.props
    return (
      <Wrap>
        <CommentNo>{comments.length} 评论</CommentNo>
      </Wrap>
    )
  }
}


const CommentNo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-bottom: 2px solid deeppink;
`

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export default PostBody
