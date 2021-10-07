import {takeEvery, call, put, select} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../Api/index';

import {
  BUY_TOKENS,
  GET_NFT_BALANCE,
  GET_TOKEN_BALANCE,
  MINT_NFT,
  SELL_TOKENS,
} from '../actions/Types.js';

function* getNFTs() {
  try {
    const result = yield call(api.getNFTs);
    if (result.data.statusCode === 200) {
      console.log('result NFTs  ==> ', result);
      yield put(actions.getNFTBalanceSuccess(result.data.body));
    }
  } catch (error) {
    console.error(error);
  }
}

function* mintNFT(action) {
  try {
    const result = yield call(api.MintNFT, action.file, action.accountAddress);
    console.log('NFT MINT Result', result);
    if (result.data.statusCode === 200) {
      console.log('NFT MINT Result', result);
      yield put(actions.getAccountBalance(action.accountAddress));
      yield put(actions.getNFTBalance());
      yield put(actions.mintNFTSuccess(result.data.body));
    }
  } catch (e) {
    console.error(e);
  }
}

// function* buyTokens(action) {
//   try {
//     const result = yield call(
//       api.BuyTokens,
//       action.accountAddress,
//       action.value,
//     );
//     if (result.data.statusCode === 200) {
//       console.log('buyTokens ==> ', result);
//       yield put(actions.BuyTokensSuccess(result.data));
//       const accountAddress = yield select(getAccountAddress);
//       yield put(actions.getAccountBalance(accountAddress));
//       yield put(actions.getTokenBalance(accountAddress));
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

// function* SellTokens(action) {
//   try {
//     const result = yield call(
//       api.SellTokens,
//       action.accountAddress,
//       action.value,
//     );
//     if (result.data.statusCode === 200) {
//       console.log('Sell Tokens ==> ', result);
//       yield put(actions.SellTokensSuccess(result.data));
//       const accountAddress = yield select(getAccountAddress);
//       yield put(actions.getAccountBalance(accountAddress));
//       yield put(actions.getTokenBalance(accountAddress));
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

export default function* WatchEthSwap() {
  yield takeEvery(GET_NFT_BALANCE, getNFTs);
  yield takeEvery(MINT_NFT, mintNFT);
}
