import React from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setPage, setPerPage, showLoader} from '../../../reducers/actions';

export const PageSwitcher = () => {
  const dispatch = useDispatch();
  const {perPage, currentPage} = useSelector(state => state);

  const onChangePerPage = (event) => {
    if (event.target.value <= 100) {
      const value = Number(event.target.value);
      return dispatch(setPerPage(value));
    }

  };
  const nextPage = () => {
    const nextPageCount = currentPage + 1;
    dispatch(showLoader());
    dispatch(setPage(nextPageCount));
  };

  return <div className={'page-switcher'}>
    <input type="number" value={perPage} onChange={onChangePerPage} min={1} max={100}/>
    <button onClick={nextPage}>Next {perPage}</button>
  </div>;

};