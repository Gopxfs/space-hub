import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './pages/Rockets';
import MissionsPage from './pages/Missions';
import ProfilePage from './pages/Profile';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<RocketsPage />} />
          <Route path='/rockets' element={<RocketsPage />} />
          <Route path='/missions' element={<MissionsPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </>
    );
  }
}

export default App;