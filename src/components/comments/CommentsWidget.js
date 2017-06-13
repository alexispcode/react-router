import React from 'react';
import CommentList from './CommentList';
import InputComment from './InputComment';

class CommentsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    const comments = [...this.state.comments, comment];
    this.setState({ comments });
  }

  render() {
    return (
      <div>
        <CommentList />
        <InputComment onSubmit={this.addComment} />
      </div>);
  }
}
export default CommentsWidget;
