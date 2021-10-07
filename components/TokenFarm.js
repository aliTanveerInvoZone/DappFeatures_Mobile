import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import {getAccount, getAccountBalance} from '../actions/index';
import FormHeader from './formHeader';
import Form from './Form';
import Loader from './Loader';
import {stakeTokens, unStakeTokens} from '../actions/index';

const TokenFarm = props => {
  let {
    tokenFarmBalance,
    tokenBalance,
    daiTokenBalance,
    stakeTokens,
    accountAddress,
    unStakeTokens,
    loader,
  } = props;

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Loader isLoading={loader} />

      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <FormHeader
          stakingBalance={tokenFarmBalance}
          rewardBalance={tokenBalance}
        />

        <Form
          balance={parseInt(daiTokenBalance)}
          stakeTokens={value => {
            stakeTokens(value, accountAddress);
          }}
          unStakeToken={() => {
            unStakeTokens(accountAddress);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    tokenBalance: state.ethSwapData.tokenBalance,
    daiTokenBalance: state.TokenFarm.daiTokenBalance,
    tokenFarmBalance: state.TokenFarm.tokenFarmBalance,
    accountAddress: state.accountData.accounts,
    loader: state.TokenFarm.loader,
  };
};

export default connect(mapStateToProps, {stakeTokens, unStakeTokens})(
  TokenFarm,
);
