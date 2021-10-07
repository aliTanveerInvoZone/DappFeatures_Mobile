/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SellForm} from './SellForm';
import {BuyForm} from './BuyForm';
import {connect} from 'react-redux';
import {getTokenBalance, BuyTokens, SellTokens} from '../actions';
import Loader from './Loader';

export const Main = props => {
  const [exchangeType, setExchangeType] = React.useState('buy');

  let {
    tokenBalance,
    accountAddress,
    accountBalance,
    BuyTokens,
    BuyTokensResponse,
    SellTokens,
    SellTokenResponse,
    loader,
  } = props;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Loader isLoading={loader} />
      <View
        style={{
          width: '100%',
          height: '10%',

          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            setExchangeType('sell');
          }}
          style={{
            backgroundColor: exchangeType === 'sell' ? 'black' : 'white',
            width: '30%',
            justifyContent: 'center',
            borderRadius: 8,
            height: 40,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: exchangeType === 'sell' ? 'white' : 'black',
              fontWeight: 'bold',
            }}>
            {'SELL'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setExchangeType('buy');
          }}
          style={{
            backgroundColor: exchangeType === 'buy' ? 'black' : 'white',
            width: '30%',
            justifyContent: 'center',
            borderRadius: 8,
            height: 40,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: exchangeType === 'buy' ? 'white' : 'black',
              fontWeight: 'bold',
            }}>
            {'BUY'}
          </Text>
        </TouchableOpacity>
      </View>
      {exchangeType === 'sell' ? (
        <SellForm
          ethBalance={accountBalance}
          tokenBalance={tokenBalance}
          sellTokens={value => {
            SellTokens(accountAddress, value);
          }}
        />
      ) : (
        <BuyForm
          ethBalance={accountBalance}
          tokenBalance={tokenBalance}
          buyTokens={value => {
            BuyTokens(accountAddress, value);
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  console.log('State Ethswao', state);
  return {
    tokenBalance: state.ethSwapData.tokenBalance,
    accountBalance: state.accountData.balance,
    accountAddress: state.accountData.accounts,
    BuyTokensResponse: state.ethSwapData.buyTokenResponse,
    SellTokenResponse: state.ethSwapData.sellTokenResponse,
    loader: state.ethSwapData.loader,
  };
};

export default connect(mapStateToProps, {
  getTokenBalance,
  BuyTokens,
  SellTokens,
})(Main);
