import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import RocketsPage from './pages/Rockets';

import MissionsPage from './pages/Missions';
import ProfilePage from './pages/Profile';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/rockets" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
