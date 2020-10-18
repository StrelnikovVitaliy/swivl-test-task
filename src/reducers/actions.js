export const actionType = {
  SET_USER_LIST: 'SET_USER_LIST',
  CLEAR_USER_LIST: 'CLEAR_USER_LIST',
  SET_SINCE_USER_ID: 'SET_SINCE_USER_ID',
  RESET_SINCE_USER_ID: 'RESET_SINCE_USER_ID',
  SET_PAGE: 'SET_PAGE',
  RESET_PAGE: 'RESET_PAGE',
  SET_PER_PAGE: 'SET_PER_PAGE',
  RESET_PER_PAGE: 'RESET_PER_PAGE',
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
};

export const setUserList = (data) => ({
  type: actionType.SET_USER_LIST,
  payload: data
});
export const clearUserList = () => ({
  type: actionType.CLEAR_USER_LIST,
});

export const setSinceUserId = (id) => ({
  type: actionType.SET_SINCE_USER_ID,
  payload: id
});

export const resetSinceUserId = () => ({
  type: actionType.RESET_SINCE_USER_ID,
});

export const setPage = (index) => ({
  type: actionType.SET_PAGE,
  payload: index
});

export const resetPage = () => ({
  type: actionType.RESET_PAGE,
});


export const setPerPage = (value) => ({
  type: actionType.SET_PER_PAGE,
  payload: value
});

export const resetPerPage = () => ({
  type: actionType.RESET_PER_PAGE,
});

export const showLoader = () => ({
  type: actionType.SHOW_LOADER,
});

export const hideLoader = () => ({
  type: actionType.HIDE_LOADER,
});

