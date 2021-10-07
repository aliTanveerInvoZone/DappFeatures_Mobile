import {BuyTokens} from '../actions/EthSwap.js';
import {
  BUY_TOKENS,
  BUY_TOKENS_SUCCESS,
  GET_ACCOUNTS_BALANCE,
  GET_TOKEN_BALANCE,
  GET_TOKEN_BALANCE_SUCCESS,
  SELL_TOKENS,
  SELL_TOKENS_SUCCESS,
} from '../actions/Types.js';

const initialState = {
  tokenBalance: '',
  buyTokenResponse: null,
  sellTokenResponse: null,
  loader: false,
};
const ethSwap = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_BALANCE:
      return {...state};
    case GET_TOKEN_BALANCE_SUCCESS:
      return {...state, tokenBalance: action.payload};
    case BUY_TOKENS:
      return {...state, loader: true};
    case BUY_TOKENS_SUCCESS:
      return {...state, buyTokenResponse: action.payload, loader: false};
    case SELL_TOKENS:
      return {...state, loader: true};
    case SELL_TOKENS_SUCCESS:
      return {...state, sellTokenResponse: action.payload, loader: false};
    default:
      return state;
  }
};

export default ethSwap;
