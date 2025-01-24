//https://eth-rinkeby.alchemyapi.io/v2/5Lswd9LhuzPMJsfCCmFaa5xF4FtZ9xZp

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/5Lswd9LhuzPMJsfCCmFaa5xF4FtZ9xZp',
      accounts: [ '9acd65a0a13f82d61255e4fa49c3cb37e573330889bf59ce434302e3143fee92' ]
    }
  }
}
