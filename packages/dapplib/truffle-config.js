require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strike rival place concert grace option equal genre'; 
let testAccounts = [
"0x6ecbfff21db75bd504477fd4ac3f20f3a413e31b6e60e3402d5a7eb0a50f3bb6",
"0xb2581a65d98ce812f84848fbd30111b1af8c0b29e16bf706416fd55b23c0f052",
"0x9b40bd3b91032ae3f5f7d6ab1c130a136e8fe21f63003f2ba48280cdeecaf50a",
"0x767360f1f1890bc4f2b011ff7b2392fc20348ff780110ab1c8df579d4a231150",
"0xf6adedeedfaa0af63b58bf55013aeeb80d86b5eb1d18b698cbd3ec3097d05b4b",
"0x650a93c7f4dc91b491e3cb6b8d108f56ee9bb86a150822a708d52e8624c29225",
"0xb9e64f750ba7c7d241942d770df565d649753b24b54e4f2fbf2d050971a55e13",
"0xc2568f70711e29f898052691426f6342b40dbac8f2ab41acc1b12c8ed97cbee5",
"0x38ce052634d61ef7c16971195f92e9e5d6fc0d7eb3337710c6d6669acbcb1a71",
"0x83886418f19b27a8bd81048aa1d8f652808347e2cad4d1a1807a285dbaa0feb3"
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
            version: '^0.5.11'
        }
    }
};
