const Web3 = require('web3');
let web3 = new Web3(Web3.providers.givenProvider || new Web3.providers.HttpProvider('http://localhost:8545'));


module.exports = web3