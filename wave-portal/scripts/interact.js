const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Update this with the deployed address

  // Get the deployed contract instance
  const wavePortal = await hre.ethers.getContractAt(
    "WavePortal",
    contractAddress
  );

  console.log("Sending a wave...");

  // Call wave function WITHOUT any arguments
  const tx = await wavePortal.wave();
  await tx.wait(); // Wait for the transaction to be mined

  // Fetch the updated total waves count
  const totalWaves = await wavePortal.totalWaves();
  console.log("Total waves:", totalWaves.toString());
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
