import { ethers } from "hardhat";

async function main() {
  const blogSession = await ethers.deployContract("BlogSessionValidationModule");

  await blogSession.waitForDeployment();

  console.log(
    `deployed to ${blogSession.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
