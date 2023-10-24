import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    fuji: {
      url: "https://silent-cool-sound.avalanche-testnet.discover.quiknode.pro/9e5eb6da9f12204fd60a68e169df0e9bd641bea1/ext/bc/C/rpc/",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    matic: {
      url: "https://rpc.ankr.com/polygon",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYSCAN_API_KEY ?? "",
      polygon: process.env.POLYSCAN_API_KEY ?? "",
    },
  },
};

export default config;
