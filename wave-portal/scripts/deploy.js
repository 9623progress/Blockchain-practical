const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();

  // Deploy the contract
  const WavePortal = await hre.ethers.deployContract("WavePortal");
  await WavePortal.waitForDeployment(); // Wait for deployment to complete

  const contractAddress = await WavePortal.getAddress();
  console.log("WavePortal deployed to:", contractAddress);

  // Send a wave
  let txn = await WavePortal.wave();
  await txn.wait();
  console.log("👋 Wave sent!");

  // Get total waves
  let count = await WavePortal.totalWaves();
  console.log("Total Waves:", count.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
