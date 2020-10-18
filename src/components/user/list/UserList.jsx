import React, {useEffect} from 'react';
import {fetchUsersArray} from '../../../functions/requests/fetchData';
import {generateUserListBody, getLastUserId} from './utils';
import {PageSwitcher} from '../pageSwitcher/PageSwitcher';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
  hideLoader,
  setSinceUserId,
  setUserList
} from '../../../reducers/actions';
import {Loader} from '../loader/Loader';

export const UserList = () => {
  const dispatch = useDispatch();
  const {sinceUserId, userList, perPage, currentPage, loader} = useSelector(state => state);

  useEffect(() => {
    fetchUsersArray(sinceUserId, perPage).then(result => {
      dispatch(setUserList(result));
      dispatch(setSinceUserId(getLastUserId(result)));

    })
      .finally(() => dispatch(hideLoader()));
  }, [currentPage]);


  return (
    <>
      <div className={'user-list'}>
        {loader ? <Loader/> : generateUserListBody(userList)}
      </div>
      <PageSwitcher/>
    </>
  );
};