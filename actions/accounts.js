import {
  GET_ACCOUNTS,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_BALANCE,
  GET_ACCOUNTS_BALANCE_SUCCESS,
} from '../actions/Types.js';

export const getAccount = () => ({
  type: GET_ACCOUNTS,
});

export const getAccountsSuccess = data => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: data,
});

export const getAccountBalance = accountAddress => ({
  type: GET_ACCOUNTS_BALANCE,
  accountAddress,
});

export const getAccountBalanceSuccess = data => ({
  type: GET_ACCOUNTS_BALANCE_SUCCESS,
  payload: data,
});
