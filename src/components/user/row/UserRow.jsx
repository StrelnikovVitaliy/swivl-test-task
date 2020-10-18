import React from 'react';
import './styles.scss';
import {UserAvatar} from '../avatar/UserAvatar';
import UserLink from '../link/UserLink';
import UserTextData from '../textData/UserTextData';
import {system} from '../../../functions/systemConstants';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {clearUserList, resetPage, resetPerPage, resetSinceUserId, showLoader} from '../../../reducers/actions';

const {
  USER_DATA: {AVATAR_LINK, LOGIN, URL_TO_PROFILE},
  AVATAR: {SIZE: {SMALL}}
} = system;

const UserRow = ({data, index}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (!data) {
    return null;
  }

  const openUserProfile = () => {
    history.push(`/user/${data[LOGIN]}`);
    dispatch(resetPage());
    dispatch(clearUserList());
    dispatch(resetPerPage());
    dispatch(resetSinceUserId());
    dispatch(showLoader());
  };

  return (
    <div className={'user-row'} onClick={openUserProfile}>
      <span>{index + 1}</span>
      <UserAvatar src={data[AVATAR_LINK]} size={SMALL}/>
      <UserLink src={data[URL_TO_PROFILE]}/>
      <UserTextData label={LOGIN} text={data[LOGIN]}/>
    </div>
  );
};

export default UserRow;