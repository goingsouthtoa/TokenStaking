// scripts/deploy.js
const { ethers } = require("hardhat");

async function main () {
    // We get the contract to deploy
    const Staking = await ethers.getContractFactory("Staking");
    console.log('Deploying Staking...');
    const steak = await Staking.deploy("0x610178da211fef7d417bc0e6fed39f05609ad788");
    
    console.log('Staking deployed to:', steak.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });