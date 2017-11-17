import React, {Component} from 'react';

class Comment extends Component {
  handleDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  }
  render() {
    const { text } = this.props;
    return (
      <div className="columns has-text-right">
        <p> { text } </p>
        <span
          className="delete"
          onClick={this.handleDelete}
        >
          delete
        </span>
      </div>
    );
  }
}

export default Comment;
