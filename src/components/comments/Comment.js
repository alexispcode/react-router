import React from 'react';
import PropTypes from 'prop-types';

import image from '../../../assets/profile.jpg';

const Comment = props => (
  <div className="comment">
    <a className="avatar">
      <img alt="profile" src={image} />
    </a>
    <div className="content">
      <a className="author">Alexis</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        {props.comment}
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
