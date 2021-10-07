import {
  GET_NFT_BALANCE,
  GET_NFT_BALANCE_SUCCESS,
  MINT_NFT,
  MINT_NFT_SUCCESS,
} from '../actions/Types.js';

export const getNFTBalance = () => ({
  type: GET_NFT_BALANCE,
});

export const getNFTBalanceSuccess = data => ({
  type: GET_NFT_BALANCE_SUCCESS,
  payload: data,
});

export const mintNFT = (file, accountAddress) => ({
  type: MINT_NFT,
  file,
  accountAddress,
});

export const mintNFTSuccess = data => ({
  type: MINT_NFT_SUCCESS,
  payload: data,
});
