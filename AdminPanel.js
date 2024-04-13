import React from 'react';
import StartElection from '../components/StartElection';
import AddCandidate from '../components/AddCandidate';
import ElectionTimer from '../components/ElectionTimer';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <StartElection />
      <AddCandidate />
      <ElectionTimer />
    </div>
  );
};

export default AdminPanel;
