import React, { Component } from 'react'
import styled from 'styled-components'
import shortid from 'shortid';

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({
            text: e.target.value
        })
    }

    submitCmt = e => {
        e.preventDefault()
        const { text } = this.state
        const id = shortid()
        const comment = {
            id,
            body: text,
            postId: this.props.postId
        }
        this.props.addComment(comment)
        this.setState({
            text: '',
        })
    }

    render() {
        const commentForm = (
            <FormWrap>
                <Input value={this.state.text} onChange={this.handleChange} />
                <Button onClick={this.submitCmt}>提交</Button>
            </FormWrap>
        )

        const { comments } = this.props
        const reversedComments = [...comments].reverse()
        const commentList = reversedComments.map(t => <Comment key={t.id}>{t.body}</Comment>)

        return (
            <Wrap>
                {commentForm}
                <CmtList>{commentList}</CmtList>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  min-height: 300px;
`
const FormWrap = styled.div`
  display: flex;
  padding: 10px;
`
const Input = styled.input`
  flex-grow: 1;
  height: 30px;
  line-height: 30px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  :focus {
    outline: none;
    border-bottom: 1px solid deeppink;
  }
`
const Button = styled.div`
  background-color: deeppink;
  margin-left: 10px;
  padding: 0 10px;
  border: none;
  line-height: 30px;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
  color: white;
`
const CmtList = styled.div`
  padding: 10px;
  div {
    line-height: 30px;
  }
`

const Comment = styled.div`
  border-bottom: 1px solid #00bcd4;
  margin-bottom: 20px;
`

export default CommentBox
