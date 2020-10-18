import {system} from '../systemConstants';

const {baseFetchURL} = system;

export const fetchUsersArray = (since = 0, perPage = 100) => {
  return fetch(`${baseFetchURL}?since=${since}&per_page=${perPage}`)
    .then(userList => {
      return userList.json();
    })
    .catch(error => console.error(error));
};


export const fetchUserData = (userLogin) => {
  return fetch(`${baseFetchURL}/${userLogin}`)
    .then(userData => {
      return userData.json();
    })
    .catch(error => console.error(error));
};

