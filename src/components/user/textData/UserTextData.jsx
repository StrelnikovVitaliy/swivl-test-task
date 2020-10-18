import React from 'react';
import './styles.scss';
import {capitalizeText} from '../../../functions/helpers';

const UserTextData = ({label, text, className = ''}) => {

  return <div className={className}>
    <span className={'label'}>{capitalizeText(label)}:</span>
    <span data-text={text}> {text}</span>
  </div>;
};

export default UserTextData;