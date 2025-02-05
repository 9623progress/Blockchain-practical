async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const WavePortal = await hre.ethers.getContractFactory("WavePortal");

  console.log("Deploying contract...");

  try {
    // Deploy the contract
    const wavePortal = await WavePortal.deploy();

    // Wait for the contract to be deployed
    await wavePortal.deployed(); // This will wait for the contract deployment to be confirmed

    // Log the successful deployment
    console.log("Contract deployed to address:", wavePortal.address);
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exit(1);
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
  });
