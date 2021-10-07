/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getAccount, getAccountBalance} from '../actions/index';
import Loader from './Loader';

const Home = props => {
  const {
    getAccount,
    accountData,
    tokenBalance,
    loader,
    NFTsArray,
    tokenFarmBalance,
    daiTokenBalance,
  } = props;

  useEffect(() => {
    getAccount();
  }, [getAccount]);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loader isLoading={loader} />
      <View
        style={{
          width: '90%',
          height: '40%',

          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {'Account Address'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {accountData.accounts}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {'Account Balance'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {parseFloat(accountData.balance).toFixed(3) + ' ETH'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {'Token Balance'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {tokenBalance + ' Tokens'}
        </Text>

        <Text style={{fontWeight: 'bold', fontSize: 16}}>{'NFTs Balance'}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {NFTsArray ? NFTsArray.length + ' NFTs' : '0  NFTs'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {'Token Farm Balance'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {tokenFarmBalance + ' Tokens'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {'DAI Token Balance'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>
          {parseInt(daiTokenBalance) + ' Dai Tokens'}
        </Text>
      </View>
      <View
        style={{
          width: '80%',
          height: '50%',

          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          {'Dapp Features'}
        </Text>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: 10,
          }}
          onPress={() => {
            props.navigation.navigate('ETH Swap');
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            {'ETH SWAP'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Minter')}
          style={{
            width: '50%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            {'NFT MINTER'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('TokenFarm')}
          style={{
            width: '50%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            {'TOKEN FARM'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    accountData: state.accountData,
    tokenBalance: state.ethSwapData.tokenBalance,
    loader: state.accountData.loader,
    NFTsArray: state.Minter.NFTs,
    tokenFarmBalance: state.TokenFarm.tokenFarmBalance,
    daiTokenBalance: state.TokenFarm.daiTokenBalance,
  };
};

export default connect(mapStateToProps, {
  getAccount,
})(Home);
