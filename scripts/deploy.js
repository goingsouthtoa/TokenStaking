// scripts/deploy.js
const { ethers } = require("hardhat");

async function main () {
    // We get the contract to deploy
    const StakeToken = await ethers.getContractFactory("StakeToken");
    console.log('Deploying Token...');
    const sToken = await StakeToken.deploy(1000000);
    
    console.log('Token deployed to:', sToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });