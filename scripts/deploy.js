// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
  const signer = await hre.ethers.getSigners();
  const deployer = signer[0];
  const CrowdFunding = await hre.ethers.getContractFactory('CrowdFunding');

  const campaign = await CrowdFunding.connect(deployer).deploy({
    nonce: await deployer.getTransactionCount(),
  });

  await campaign.deployed();
  console.log('Contract deployed to address:', campaign.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
