import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => (
  <div>
    {props.comments && (<ul>
      {props.comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </ul>)}
    <div className="message">
      <p className="nocomments">What are you waiting for? Write add a comment...!</p>
    </div>
  </div>
);

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};
