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
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui replay form">
          <div className="field">
            <textarea
              value={this.state.comment}
              onChange={this.setComment}
              placeholder="Add a comment..."
              rows="4"
            />
          </div>
          <button type="submit" className="ui blue labeled submit icon button">
            <i className="icon edit" /> Send
          </button>
        </form>
      </div>
    );
  }

}

InputComment.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default InputComment;

