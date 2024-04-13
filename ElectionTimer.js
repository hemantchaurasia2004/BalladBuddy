import React, { useState, useEffect } from 'react';
import { initContract } from './ethers2'; // Change the import to use ethers

const ElectionTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const getRemainingTime = async () => {
            const contract = await initContract();
            if (!contract) {
                console.error("Contract not initialized.");
                return;
            }
            
            try {
                const endTime = await contract.votingEnd();
                const remaining = Math.max(0, endTime.toNumber() - Math.floor(Date.now() / 1000));
                setTimeRemaining(remaining);
            } catch (error) {
                console.error('Error getting remaining time:', error);
            }
        };

        getRemainingTime();
        const interval = setInterval(getRemainingTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    };

    return (
        <div>
            <h2>Election Timer</h2>
            <p>Time Remaining: {formatTime(timeRemaining)}</p>
        </div>
    );
};

export default ElectionTimer;
