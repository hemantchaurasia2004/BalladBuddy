
import React from 'react';
import StartElection from '../components/StartElection';
import AddCandidate from '../components/AddCandidate';
import Vote from '../components/Vote';
import ElectionTimer from '../components/ElectionTimer';

const Election = () => {
  return (
    <div>
      <h1>Election</h1>

      <Vote />
      <ElectionTimer />
    </div>
  );
};

export default Election;
