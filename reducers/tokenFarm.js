import {unStakeTokenSuccess} from '../actions/tokenFarm.js';
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

const initialState = {
  daiTokenBalance: '',
  tokenFarmBalance: '',
  loader: false,
  stakeTokenResponse: '',
  unStakeTokenResponse: '',
};
const TokenFarm = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_FARM_BALANCE:
      return {...state};
    case TOKEN_FARM_BALANCE_SUCCESS:
      return {...state, tokenFarmBalance: action.payload};
    case GET_DAI_TOKEN_BALANCE:
      return {...state};
    case DAI_TOKEN_BALANCE_SUCCESS:
      return {...state, daiTokenBalance: action.payload};
    case STAKE_TOKENS:
      return {...state, loader: true};
    case STAKE_TOKENS_SUCCESS:
      return {...state, stakeTokenResponse: action.payload, loader: false};
    case UN_STAKE_TOKENS:
      return {...state, loader: true};
    case UN_STAKE_TOKENS_SUCCESS:
      return {...state, unStakeTokenResponse: action.payload, loader: false};
    default:
      return state;
  }
};

export default TokenFarm;
