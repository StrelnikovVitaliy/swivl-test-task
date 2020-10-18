import React from 'react';
import loader from '../../../loader.gif';
import './styles.scss';

export const Loader = () => {
  return <img className={'loader'} src={loader} alt="loading..."/>;
};