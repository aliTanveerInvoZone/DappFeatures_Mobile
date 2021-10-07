import {takeEvery, call, put, fork, takeLatest, take} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../Api/index';
import {all} from 'redux-saga/effects';
import {GET_ACCOUNTS, GET_ACCOUNTS_BALANCE} from '../actions/Types.js';

function* getAccounts() {
  try {
    const result = yield call(api.getAccounts);

    if (result.data.statusCode === 200) {
      if (result.data.body) {
        console.log('result', result);
        yield put(actions.getAccountBalance(result.data.body[0]));
        yield put(actions.getTokenBalance(result.data.body[0]));
        yield put(actions.getNFTBalance());
        yield put(actions.getDaiTokenBalance(result.data.body[0]));
        yield put(actions.getTokenFarmBalance(result.data.body[0]));
        yield put(actions.getAccountsSuccess(result.data.body[0]));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function* getAccountsBalance(action) {
  try {
    const result = yield call(api.getAccountBalance, action.accountAddress);

    console.log('result getAccountsBalance --->', result);
    if (result.data.statusCode === 200) {
      yield put(actions.getAccountBalanceSuccess(result.data.body));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* WatchUserAccounts() {
  yield takeEvery(GET_ACCOUNTS, getAccounts);
  yield takeEvery(GET_ACCOUNTS_BALANCE, getAccountsBalance);
}
