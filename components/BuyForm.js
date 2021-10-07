/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export const BuyForm = ({ethBalance, tokenBalance, buyTokens}) => {
  const [output, setOutput] = React.useState(0);

  return (
    <View style={{width: '100%', height: 400}}>
      <View
        style={{
          height: '40%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={{fontWeight: 'bold', fontSize: 15}}>
          {'Input Balance = ' + ethBalance + ' Ethers'}
        </Text>
        <TextInput
          onChangeText={input => {
            setOutput(input.toString() * 100);
          }}
          keyboardType={'numeric'}
          placeholder="0"
          style={{
            borderWidth: 1,
            width: '80%',
            height: 50,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          height: '40%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          {'Output Balance = ' + tokenBalance + ' Tokens'}
        </Text>
        <TextInput
          value={output.toString()}
          editable={false}
          keyboardType={'numeric'}
          placeholder="0"
          style={{
            borderWidth: 1,
            width: '80%',
            height: 50,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          height: '20%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          {'Exchange Rate'}
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          {'1 ETH = 100 Token'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            let ether = output / 100;
            ether = ether.toString();
            buyTokens(ether);
          }}
          style={{
            width: '50%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: 'black',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{'Swap!'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
