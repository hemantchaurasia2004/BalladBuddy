import React, { useState, useEffect } from "react";
import { initProvider, initContract } from "./ethers2"; // Change the import to use ethers

const Vote = () => {
    const [candidateId, setCandidateId] = useState(0);
    const [tokens, setTokens] = useState(0);

    useEffect(() => {
        async function init() {
            await initProvider();
        }
        init();
    }, []);

    const handleVote = async () => {
        const provider = await initProvider();
        if (!provider) {
            console.error("Ethereum provider not initialized.");
            return;
        }

        const contract = await initContract();
        if (!contract) {
            console.error("Contract not initialized.");
            return;
        }

        try {
            const signer = provider.getSigner();
            await contract.connect(signer).voteTo(candidateId, tokens);
            console.log('Vote submitted successfully!');
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    return (
        <div>
            <h2>Vote</h2>
            <input
                type="number"
                placeholder="Enter candidate ID"
                value={candidateId}
                onChange={(e) => setCandidateId(parseInt(e.target.value))}
            />
            <input
                type="number"
                placeholder="Enter number of tokens"
                value={tokens}
                onChange={(e) => setTokens(parseInt(e.target.value))}
            />
            <button onClick={handleVote}>Vote</button>
        </div>
    );
};

export default Vote;
