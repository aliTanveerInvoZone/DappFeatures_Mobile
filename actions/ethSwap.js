import {
  BUY_TOKENS,
  BUY_TOKENS_SUCCESS,
  GET_TOKEN_BALANCE,
  GET_TOKEN_BALANCE_SUCCESS,
  SELL_TOKENS,
  SELL_TOKENS_SUCCESS,
} from '../actions/Types.js';

export const getTokenBalance = accountAddress => ({
  type: GET_TOKEN_BALANCE,
  accountAddress,
});

export const getTokenBalanceSuccess = data => ({
  type: GET_TOKEN_BALANCE_SUCCESS,
  payload: data,
});

export const BuyTokens = (accountAddress, value) => ({
  type: BUY_TOKENS,
  accountAddress,
  value,
});

export const BuyTokensSuccess = data => ({
  type: BUY_TOKENS_SUCCESS,
  payload: data,
});

export const SellTokens = (accountAddress, value) => ({
  type: SELL_TOKENS,
  accountAddress,
  value,
});

export const SellTokensSuccess = data => ({
  type: SELL_TOKENS_SUCCESS,
  payload: data,
});

// export const getAccountBalance = accountAddress => ({
//   type: GET_ACCOUNTS_BALANCE,
//   accountAddress,
// });

// export const getAccountBalanceSuccess = data => ({
//   type: GET_ACCOUNTS_BALANCE_SUCCESS,
//   payload: data,
// });
