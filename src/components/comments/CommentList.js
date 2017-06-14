import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
  let showMessageWhenEmpty;

  if (props.comments && props.comments.length === 0) {
    showMessageWhenEmpty = (<div className="message">
      <p className="nocomments">What are you waiting for? Write add a comment...!</p>
    </div>);
  }

  return (
    <div>
      {props.comments && (props.comments.map((comment, index) =>
        (<Comment key={index} comment={comment} />)
      ))}
      {showMessageWhenEmpty}
    </div>
  );
};

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};
