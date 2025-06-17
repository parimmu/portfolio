import React from 'react';
import Dropdown from './Dropdown.jsx'; // Import the Dropdown component
// If you have global styles you want App.jsx to control, import style.css here
// import '../style.css'; // Assuming style.css is in the root

function App() {
  return (
    <div className="App">
      <Dropdown /> {/* Render the Dropdown component */}
      {/* The rest of your page content (sections) will eventually go here, managed by React or remain static HTML */}
    </div>
  );
}

export default App;
