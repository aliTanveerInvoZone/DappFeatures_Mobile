/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import { Main } from "./Components/Main";
import Loader from '../components/Loader';
import {connect} from 'react-redux';
import {mintNFT} from '../actions/index';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Minter = props => {
  let {NftsArray, mintNFT, accountAddress, loader} = props;
  const [file, setFile] = useState('');

  function onGalleryPress() {
    launchImageLibrary({mediaType: 'photo'}, (resp: any) => {
      if (resp.didCancel) {
        return;
      } else if (resp.errorCode) {
        return;
      } else if (resp.assets) {
        let file = resp.assets[0];

        setFile(file);
        console.log('file', file);
      }
    });
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Loader isLoading={loader} />

      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            height: '30%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            {file ? (
              <Image
                style={{width: 100, height: 100}}
                source={{uri: file.uri}}
              />
            ) : (
              <Text>{'SELECT IMAGE'}</Text>
            )}
          </View>
          <View
            style={{
              width: '100%',
              height: '30%',

              flexDirection: 'row',

              alignItems: 'center',
              justifyContent: file ? 'space-between' : 'center',
            }}>
            {file ? (
              <TouchableOpacity
                onPress={() => {
                  mintNFT(file, accountAddress);
                }}
                style={{
                  width: '40%',
                  height: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: 'black',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {'MINT'}
                </Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                onGalleryPress();
              }}
              style={{
                width: '40%',
                height: '60%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'black',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {' Gallery'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '80%', height: '65%', justifyContent: 'center'}}>
          <FlatList
            data={NftsArray}
            numColumns={2}
            extraData={props}
            contentContainerStyle={{flex: 1}}
            renderItem={item => {
              return (
                <View
                  style={{
                    width: '45%',
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: 10,
                    margin: 10,
                  }}>
                  <Image
                    style={{
                      width: '80%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                    source={{
                      uri: 'https://gateway.pinata.cloud/ipfs/' + item.item,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    NftsArray: state.Minter.NFTs,
    accountAddress: state.accountData.accounts,
    loader: state.Minter.loader,
  };
};

export default connect(mapStateToProps, {mintNFT})(Minter);
