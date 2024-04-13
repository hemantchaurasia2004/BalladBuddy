import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './views/Home';
import Election from './views/Election';
import AdminPanel from './views/AdminPanel';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/election" element={<Election/>} />
          <Route path="/admin-panel" element={<AdminPanel/>} />
      </Routes>
      </div>
  );
}

export default App;
