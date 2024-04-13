import React, { useState } from 'react';
import { initProvider, initContract } from './ethers2'; // Change the import to use ethers

const StartElection = () => {
    const [candidates, setCandidates] = useState([]);
    const [duration, setDuration] = useState(0);

    const handleStartElection = async () => {
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
            await contract.connect(signer).startElection(candidates, duration);
            console.log('Election started successfully!');
        } catch (error) {
            console.error('Error starting election:', error);
        }
    };

    return (
        <div>
            <h2>Start Election</h2>
            <input
                type="text"
                placeholder="Enter candidates separated by commas"
                value={candidates}
                onChange={(e) => setCandidates(e.target.value.split(','))}
            />
            <input
                type="number"
                placeholder="Enter duration in minutes"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
            />
            <button onClick={handleStartElection}>Start Election</button>
        </div>
    );
};

export default StartElection;
