import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Voting DApp</h1>
      <Link to="/election">Go to Election</Link>
      <br />
      <Link to="/admin-panel">Go to Admin Panel</Link>
    </div>
  );
};

export default Home;