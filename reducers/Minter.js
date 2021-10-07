import {
  GET_NFT_BALANCE,
  GET_NFT_BALANCE_SUCCESS,
  MINT_NFT,
  MINT_NFT_SUCCESS,
} from '../actions/Types.js';

const initialState = {
  NFTs: [],
  loader: false,
  mintResponse: '',
};
const Minter = (state = initialState, action) => {
  switch (action.type) {
    case GET_NFT_BALANCE:
      return {...state};
    case GET_NFT_BALANCE_SUCCESS:
      return {...state, NFTs: action.payload.data};
    case MINT_NFT:
      return {...state, loader: true};
    case MINT_NFT_SUCCESS:
      return {...state, mintResponse: action.payload, loader: false};
    default:
      return state;
  }
};

export default Minter;
