import React, { useState } from 'react';
import { initProvider, initContract } from './ethers2'; 

const AddCandidate = () => {
    const [name, setName] = useState('');

    const handleAddCandidate = async () => {
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
            await contract.connect(signer).addCandidate(name);
            console.log('Candidate added successfully!');
        } catch (error) {
            console.error('Error adding candidate:', error);
        }
    };

    return (
        <div>
            <h2>Add Candidate</h2>
            <input
                type="text"
                placeholder="Enter candidate name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddCandidate}>Add Candidate</button>
        </div>
    );
};

export default AddCandidate;
