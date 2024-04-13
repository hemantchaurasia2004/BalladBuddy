import { ethers } from "ethers"; // Use ES6 import syntax for ethers
import VotingContract from '../Voting.json';

let provider;
let votingContract;

const initProvider = async () => {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            await window.ethereum.enable();
            return provider;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log("No ethereum provider detected");
        return null;
    }
};

const initContract = async () => {
    const contractAddress = "0x19bE2Fe2F37FB32F65e5cA78610188A183D220d1";

    const provider = await initProvider(); // Make sure to initialize provider first
    const signer = provider.getSigner();
    votingContract = new ethers.Contract(contractAddress, VotingContract.abi, signer);
    return votingContract;
};

export { initProvider, initContract };
