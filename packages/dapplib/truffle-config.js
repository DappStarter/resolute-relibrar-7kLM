require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind erosion hockey enrich orient seed'; 
let testAccounts = [
"0x84be1ad163a753bb0afd45f4f3d9a3ba1fcc86c5eb52246fddabf1a7396ed53c",
"0x9ee3e2ccf7627571b7090801b87961b91770cb26a0685860d6450733aceaa87b",
"0x1206461db83e2991c4b32d1d6f2e5a88dae197f37052d452e10808d84c387981",
"0x323b3f9912f9ea0848545294917922edd723cc5a5c0e3d42fb432cc874e21fce",
"0x4de0c39abc224df9cdd8595a350f9c7391846f9fe23ecffb5b299ed58a278741",
"0x0a17a8d12888d8192293e6f2c10c30146457eddf291482d1e4ad3085182d881f",
"0x271f41f6452539960b21860705864c9a9da55bfc7c463c63d06668120636c62d",
"0xf870194d49ecc679ccc6224fea34d597f688ea5b76339c6dcf56bd0600c66acf",
"0xdc752776ca6b785d61b68a9ff9f055b272a9544d90b1ebbaf4c9f95b4e0ae230",
"0xc3c0dac222f304f34862ab008d29b59740e6684ecf70b8c503aff42cf205fdcb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

