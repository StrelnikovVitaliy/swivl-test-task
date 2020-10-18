import React from 'react';
import UserTextData from '../textData/UserTextData';
import {system} from '../../../functions/systemConstants';

const {
  USER_DATA: {LOGIN, EMAIL, NAME, LOCATION},
  Messages: {EMPTY_VALUE}
} = system;


export const applyUserPageClassName = (propsLabel) => {
  switch (propsLabel) {
    case LOGIN:
    case EMAIL:
    case LOCATION:
    case NAME:
      return 'headerData';
    default:
      return 'profileText';
  }
};

export const generateUserPageData = (userData) => {
  return Object.entries(userData)
    .map((element) => {
      const [label, text] = element;

      return (
        <UserTextData
          label={label}
          text={text || EMPTY_VALUE}
          className={`user-page user-page-${applyUserPageClassName(label)}`}
          key={label}
        />
      );
    });
};
