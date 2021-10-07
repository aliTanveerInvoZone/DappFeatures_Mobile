import {takeEvery, call, put, fork, takeLatest, take} from 'redux-saga/effects';

import {all} from 'redux-saga/effects';

import WatchUserAccounts from './accounts';
import WatchEthSwap from './ethswap';
import WatchMinter from './Minter';
import WatchTokenFarm from './tokenFarm';

const web3Saga = [
  fork(WatchUserAccounts),
  fork(WatchEthSwap),
  fork(WatchMinter),
  fork(WatchTokenFarm),
];

export default function* rootSaga() {
  yield all([...web3Saga]);
}
