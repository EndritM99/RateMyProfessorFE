import React from 'react';
import SideNavBar from './Sidebar/SideNavbar';
import Card from './Sidebar/Card';
import SearchInput from './Sidebar/SearchInput';
import History from './History';
import Profile from './Sidebar/Profile'

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <div className="top-section">
          <SearchInput />
          <h1>Welcome to the highest rated University,<br></br> show us your opinion about us.</h1>
        </div>
        </div>
      <div className="sidebar">
        <SideNavBar />
      </div>
      <div className='card-container'>
        <History/>
      </div>
      </div>
  );
}

export default App;
