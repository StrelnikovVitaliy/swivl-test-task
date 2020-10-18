import {actionType} from './actions';

const defaultState = {
  userList: [],
  sinceUserId: 0,
  currentPage: 1,
  perPage: 100,
  loader: true,
};

const reducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case actionType.SET_USER_LIST:
      return {...state, userList: [...state.userList, ...payload]};
    case actionType.CLEAR_USER_LIST:
      return {...state, userList: []};

    case actionType.SET_SINCE_USER_ID:
      return {...state, sinceUserId: payload};
    case actionType.RESET_SINCE_USER_ID:
      return {...state, sinceUserId: 0};

    case actionType.SET_PAGE:
      return {...state, currentPage: payload};
    case actionType.RESET_PAGE:
      return {...state, currentPage: 1};

    case actionType.SET_PER_PAGE:
      return {...state, perPage: payload};
    case actionType.RESET_PER_PAGE:
      return {...state, perPage: 100};

    case actionType.SHOW_LOADER:
      return {...state, loader: true};
    case actionType.HIDE_LOADER:
      return {...state, loader: false};
    default:
      return state;
  }
};

export default reducer;