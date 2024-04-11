require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};

//Voting contract deployed to: 0x19bE2Fe2F37FB32F65e5cA78610188A183D220d1