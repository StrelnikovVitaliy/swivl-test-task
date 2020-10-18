import React from 'react';
import loader from '../../../loader.gif';
import './styles.scss';

export const Loader = () => {
  return <div className={'loader'}>
    <img src={loader} alt="loading..." height={150} width={150}/>
  </div>;
};