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
      <div className="ui minimal comments">
        <h3 className="ui dividing header">Comments</h3>
        <CommentList comments={this.state.comments} />
        <InputComment onSubmit={this.addComment} />
      </div>
    );
  }
}
export default CommentsWidget;
