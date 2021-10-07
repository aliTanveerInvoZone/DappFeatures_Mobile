/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const FormHeader = ({stakingBalance = '0', rewardBalance = '0'}) => {
  return (
    <View
      style={{
        width: '80%',
        height: 100,
        margin: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', margin: 5}}>
          {'Staking Balance'}
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold', margin: 5}}>
          {stakingBalance + ' Tokens'}
        </Text>
      </View>
      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', margin: 5}}>
          {'Reward Balance'}
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold', margin: 5}}>
          {rewardBalance}
        </Text>
      </View>
    </View>
  );
};

export default FormHeader;
