import React from 'react';
import UserRow from '../row/UserRow';

export const generateUserListBody = (data) => {
  return data.length
    ? data.map((element, index) => <UserRow data={element} key={element.id} index={index}/>)
    : null;
};

export const getLastUserId = (data = []) => {
  if (data.length) {
    return data[data.length - 1].id;
  }

  return 0;
};

export const navigateToNewPage = (userList) => {
  const nodeToScroll = document.getElementById(`anchor${userList.length}`);
  if (nodeToScroll) {
    nodeToScroll.scrollIntoView();
  }
};