import {takeEvery, call, put, select} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../Api/index';

import {
  BUY_TOKENS,
  GET_DAI_TOKEN_BALANCE,
  GET_NFT_BALANCE,
  GET_TOKEN_BALANCE,
  GET_TOKEN_FARM_BALANCE,
  MINT_NFT,
  SELL_TOKENS,
  STAKE_TOKENS,
  UN_STAKE_TOKENS,
} from '../actions/Types.js';

function* getTokenFarmBalance(action) {
  try {
    const result = yield call(api.getTokenFarmBalance, action.accountAddress);
    if (result.data.statusCode === 200) {
      console.log('result getTokenFarmBalance  ==> ', result);
      yield put(actions.getTokenFarmBalanceSuccess(result.data.body));
    }
  } catch (error) {
    console.error(error);
  }
}

function* getDaiTokenBalance(action) {
  try {
    const result = yield call(api.getDaiTokenBalance, action.accountAddress);
    if (result.data.statusCode === 200) {
      console.log('result getDaiTokenBalance  ==> ', result);
      yield put(actions.getDaiTokenBalanceSuccess(result.data.body));
    }
  } catch (error) {
    console.error(error);
  }
}

const getAccountAddress = state => state.accountData.accounts;

function* stakeTokens(action) {
  try {
    const result = yield call(
      api.stakeTokens,
      action.accountAddress,
      action.value,
    );
    if (result.data.statusCode === 200) {
      console.log('result stakeTokens  ==> ', result);
      let accountAddress = yield select(getAccountAddress);
      yield put(actions.getAccountBalance(accountAddress));
      yield put(actions.getDaiTokenBalance(accountAddress));
      yield put(actions.getTokenFarmBalance(accountAddress));
      yield put(actions.getTokenBalance(accountAddress));
      yield put(actions.stakeTokensSuccess(result.data.body));
    }
  } catch (e) {
    console.error(e);
  }
}

function* unStakeTokens(action) {
  try {
    const result = yield call(api.unStakeToken, action.accountAddress);
    if (result.data.statusCode === 200) {
      console.log('result stakeTokens  ==> ', result);
      let accountAddress = yield select(getAccountAddress);
      yield put(actions.getAccountBalance(accountAddress));
      yield put(actions.getDaiTokenBalance(accountAddress));
      yield put(actions.getTokenFarmBalance(accountAddress));
      yield put(actions.getTokenBalance(accountAddress));
      yield put(actions.unStakeTokenSuccess(result.data.body));
    }
  } catch (e) {
    console.error(e);
  }
}

// function* mintNFT(action) {
//   try {
//     const result = yield call(api.MintNFT, action.file, action.accountAddress);
//     console.log('NFT MINT Result', result);
//     if (result.data.statusCode === 200) {
//       console.log('NFT MINT Result', result);
//       yield put(actions.getAccountBalance(action.accountAddress));
//       yield put(actions.getNFTBalance());
//       yield put(actions.mintNFTSuccess(result.data.body));
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

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

export default function* WatchTokenFarm() {
  yield takeEvery(GET_TOKEN_FARM_BALANCE, getTokenFarmBalance);
  yield takeEvery(GET_DAI_TOKEN_BALANCE, getDaiTokenBalance);
  yield takeEvery(STAKE_TOKENS, stakeTokens);
  yield takeEvery(UN_STAKE_TOKENS, unStakeTokens);
  //   yield takeEvery(MINT_NFT, mintNFT);
}
