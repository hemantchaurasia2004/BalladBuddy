const hre = require("hardhat");

async function main() {
    const votingContract = await hre.ethers.getContractFactory("Voting");
    const deployedVotingContract = await votingContract.deploy();

    console.log(`Voting contract deployed to: ${deployedVotingContract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
    }
);