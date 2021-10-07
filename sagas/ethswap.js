import {takeEvery, call, put, select} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../Api/index';

import {BUY_TOKENS, GET_TOKEN_BALANCE, SELL_TOKENS} from '../actions/Types.js';

const getAccountAddress = state => state.accountData.accounts;

function* getTokenBalance(action) {
  try {
    const result = yield call(api.getTokenBalance, action.accountAddress);
    if (result.data.statusCode === 200) {
      console.log('result getTokenBalance ==> ', result);
      yield put(actions.getTokenBalanceSuccess(result.data.body));
    }
  } catch (error) {
    console.error(error);
  }
}

function* buyTokens(action) {
  console.log('ETH SWAP ACTION ===> ', action);
  try {
    const result = yield call(
      api.BuyTokens,
      action.accountAddress,
      action.value,
    );
    if (result.data.statusCode === 200) {
      console.log('buyTokens ==> ', result);

      const accountAddress = yield select(getAccountAddress);
      yield put(actions.getAccountBalance(accountAddress));
      yield put(actions.getTokenBalance(accountAddress));
      yield put(actions.BuyTokensSuccess(result.data));
    }
  } catch (e) {
    console.error(e);
  }
}

function* SellTokens(action) {
  try {
    const result = yield call(
      api.SellTokens,
      action.accountAddress,
      action.value,
    );
    if (result.data.statusCode === 200) {
      console.log('Sell Tokens ==> ', result);

      const accountAddress = yield select(getAccountAddress);
      yield put(actions.getAccountBalance(accountAddress));
      yield put(actions.getTokenBalance(accountAddress));
      yield put(actions.SellTokensSuccess(result.data));
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* WatchEthSwap() {
  yield takeEvery(GET_TOKEN_BALANCE, getTokenBalance);
  yield takeEvery(BUY_TOKENS, buyTokens);
  yield takeEvery(SELL_TOKENS, SellTokens);
}
