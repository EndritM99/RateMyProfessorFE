import React from 'react';
import SideNavBar from './Sidebar/SideNavbar';
import SearchInput from './Sidebar/SearchInput';


function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <SideNavBar />
      </div>
      <div className="content-container">
        <div className="top-section">
          <SearchInput />
          <h1>Welcome to the highest rated University,<br></br> show us your opinion about us.</h1>
        </div>
     
        </div>
      </div>
    
  );
}

export default App;
