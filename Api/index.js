import axios from 'axios';

const localHost = 'http://localhost:3000';
const live = 'https://sleepy-wildwood-58632.herokuapp.com';

export const getAccounts = () => {
  return axios.get(localHost + '/getAccounts');
};

export const getAccountBalance = accountAddress => {
  console.log('accountAddress', accountAddress);
  return axios.get(localHost + '/getAccountBalance/' + accountAddress);
};

export const getTokenBalance = accountAddress => {
  return axios.get(localHost + '/getTokensBalance/' + accountAddress);
};

export const BuyTokens = (accountAddress, value) => {
  var bodyFormData = new FormData();
  bodyFormData.append('value', value);
  bodyFormData.append('accountAddress', accountAddress);

  return axios.post(localHost + '/buyTokens', bodyFormData);
};

export const SellTokens = (accountAddress, value) => {
  var bodyFormData = new FormData();
  bodyFormData.append('value', value);
  bodyFormData.append('accountAddress', accountAddress);

  return axios.post(localHost + '/sellTokens', bodyFormData);
};

export const getNFTs = () => {
  return axios.get(localHost + '/getNfts');
};

export const MintNFT = (file, accountAddress) => {
  console.log('file, accountAddress', file, accountAddress);
  var bodyFormData = new FormData();
  bodyFormData.append('file', {
    uri: file.uri.replace('file://', ''),
    name: file.fileName,
    type: file.type,
  });
  bodyFormData.append('accountAddress', accountAddress);

  return axios.post(localHost + '/mintNft', bodyFormData);
};

export const getTokenFarmBalance = accountAddress => {
  return axios.get(localHost + '/getTokenFarmBalance/' + accountAddress);
};
export const getDaiTokenBalance = accountAddress => {
  return axios.get(localHost + '/getDaiTokenBalance/' + accountAddress);
};

export const stakeTokens = (accountAddress, value) => {
  var bodyFormData = new FormData();
  bodyFormData.append('value', value);
  bodyFormData.append('accountAddress', accountAddress);

  return axios.post(localHost + '/stakeTokens', bodyFormData);
};
export const unStakeToken = accountAddress => {
  var bodyFormData = new FormData();

  bodyFormData.append('accountAddress', accountAddress);

  return axios.post(localHost + '/unStakeTokens', bodyFormData);
};
