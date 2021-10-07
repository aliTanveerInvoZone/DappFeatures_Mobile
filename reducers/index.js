import {combineReducers} from 'redux';

import accountData from './accounts';
import ethSwapData from './ethSwap';
import Minter from './Minter';
import TokenFarm from './tokenFarm';

export default combineReducers({
  accountData: accountData,
  ethSwapData: ethSwapData,
  Minter: Minter,
  TokenFarm: TokenFarm,
});
