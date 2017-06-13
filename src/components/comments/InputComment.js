import React from 'react';
import PropTypes from 'prop-types';

class InputComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.setComment = this.setComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setComment(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.comment);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.comment} onChange={this.setComment} />
          <button type="submit">Add Replay</button>
        </form>
      </div>
    );
  }

}

InputComment.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default InputComment;

