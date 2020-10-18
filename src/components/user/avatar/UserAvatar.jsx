import React from 'react';
import {system} from '../../../functions/systemConstants';

const {
  AVATAR: {
    SIZE:
      {SMALL, HEIGHT, AUTO, MIN_HEIGHT, MIN_WIDTH}
  }
} = system;

export const UserAvatar = ({src, size, className = ''}) => {

  const sizeSettings = size === SMALL
    ? {height: MIN_HEIGHT, width: MIN_WIDTH}
    : {height: HEIGHT, width: AUTO};

  return <img
    className={className}
    src={src}
    alt="User avatar"
    height={sizeSettings.height}
    width={sizeSettings.width}
  />;

};