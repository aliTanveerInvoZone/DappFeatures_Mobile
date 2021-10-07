import {
  DAI_TOKEN_BALANCE_SUCCESS,
  GET_DAI_TOKEN_BALANCE,
  GET_NFT_BALANCE,
  GET_NFT_BALANCE_SUCCESS,
  GET_TOKEN_BALANCE_SUCCESS,
  GET_TOKEN_FARM_BALANCE,
  MINT_NFT,
  MINT_NFT_SUCCESS,
  STAKE_TOKENS,
  STAKE_TOKENS_SUCCESS,
  TOKEN_FARM_BALANCE_SUCCESS,
  UN_STAKE_TOKENS,
  UN_STAKE_TOKENS_SUCCESS,
} from '../actions/Types.js';

export const getTokenFarmBalance = accountAddress => ({
  type: GET_TOKEN_FARM_BALANCE,
  accountAddress,
});

export const getTokenFarmBalanceSuccess = data => ({
  type: TOKEN_FARM_BALANCE_SUCCESS,
  payload: data,
});

export const getDaiTokenBalance = accountAddress => ({
  type: GET_DAI_TOKEN_BALANCE,
  accountAddress,
});

export const getDaiTokenBalanceSuccess = data => ({
  type: DAI_TOKEN_BALANCE_SUCCESS,
  payload: data,
});

export const stakeTokens = (value, accountAddress) => ({
  type: STAKE_TOKENS,
  accountAddress,
  value,
});

export const stakeTokensSuccess = data => ({
  type: STAKE_TOKENS_SUCCESS,
  payload: data,
});

export const unStakeTokens = accountAddress => ({
  type: UN_STAKE_TOKENS,
  accountAddress,
});

export const unStakeTokenSuccess = data => ({
  type: UN_STAKE_TOKENS_SUCCESS,
  payload: data,
});

// export const mintNFT = (file, accountAddress) => ({
//   type: MINT_NFT,
//   file,
//   accountAddress,
// });

// export const mintNFTSuccess = data => ({
//   type: MINT_NFT_SUCCESS,
//   payload: data,
// });
