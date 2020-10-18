import React from 'react';
import './styles.scss';

const UserLink = ({src}) => {
  return <a href={src}
            className={'user-link'}
            onClick={(e) => e.stopPropagation()}
            target='_blank'
            rel="noopener noreferrer">
    Link to GitHub page: {src}
  </a>;
};

export default UserLink;
