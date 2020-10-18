import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchUserData} from '../../../functions/requests/fetchData';
import {UserAvatar} from '../avatar/UserAvatar';
import {system} from '../../../functions/systemConstants';
import './styles.scss';
import {isEmptyObject} from '../../../functions/helpers';
import {generateUserPageData} from './utils';

const {
  USER_DATA: {AVATAR_LINK},
  AVATAR: {SIZE: {MEDIUM}}
} = system;

export const UserPage = () => {
  let {login} = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData(login).then(result => setUserData(result));
    return () => setUserData({});
  }, [login]);

  if (isEmptyObject(userData)) {
    return null;
  }
  const bodyRender = generateUserPageData(userData);

  return (
    <>
      <Link className={'user-page user-page-homeLink'} to={'/'}>Home</Link>
      <UserAvatar
        src={userData[AVATAR_LINK]}
        size={MEDIUM}
        className={'user-page user-page-avatar'}
      />
      {bodyRender}
    </>
  );
};