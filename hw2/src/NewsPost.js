import React, { Component } from "react";

import Comment from "./Comment"

let id = 0;
const idCounter = () => {
  id++
  return id;
}

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };
  handleChange = (e) => {
    this.setState({
      commentInput: e.target.value
    });
  };
  handleKeyDown = (e) => {
    const { comments, commentInput } = this.state;
    let newComment = {};
    if (e.keyCode === 13) {
      newComment = {
        id: idCounter(),
        text: commentInput
      };
      this.setState({
        comments: [...comments, newComment],
        commentInput: ""
      });
    }
  };
  handleDelete = (id) => {
    const { comments } = this.state;
    this.setState({
      comments: comments.filter( comment => comment.id !== id  )
    })
  };

  renderComments() {
    const { comments } = this.state;

    return comments.map(comment => {
      return <Comment
        key={comment.id}
        id={comment.id}
        text={comment.text}
        onDelete={ this.handleDelete }
      />;
    });
  };

  render() {
    const { text } = this.props;
    const { commentInput } = this.state;
    return (
      <div>
        <p> {text} </p>
        <input
          type="text"
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Commend something"
          className="input is-danger"
        />
        <div className="column is-pulled-right">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default NewsPost;
