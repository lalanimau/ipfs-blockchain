const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = "823a72e6844da45c4cc794a40fcc640a109c39bc258596bdd33b087b108873d2"; // raw private key
const infuraKey = "c4XYujMRtM9w5yfojsAb";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(privKey, "https://ropsten.infura.io/"+infuraKey);
      },
      network_id: 3,
      gas: 4700000,   // <--- Twice as much
      gasPrice: 10000000000
      //gasPrice: web3.toWei('10','gwei')

    }
  }
};
