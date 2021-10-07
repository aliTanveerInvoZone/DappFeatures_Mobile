import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_BALANCE_SUCCESS,
  GET_ACCOUNTS,
  GET_ACCOUNTS_BALANCE,
} from '../actions/Types.js';

const initialState = {
  accounts: '',
  balance: '',
  loader: false,
};
const accountData = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {...state, loader: true};
    case GET_ACCOUNTS_SUCCESS:
      return {...state, accounts: action.payload, loader: false};
    case GET_ACCOUNTS_BALANCE:
      return {...state, loader: true};
    case GET_ACCOUNTS_BALANCE_SUCCESS:
      return {...state, balance: action.payload, loader: false};
    default:
      return state;
  }
};

export default accountData;
