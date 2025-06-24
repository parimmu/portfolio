import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  // Define sections with their paths for React Router
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button
        onClick={toggleDropdown}
        className="dropdown-button"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        Menu
      </button>
      {isOpen && (
        <ul id="dropdown-menu" className="dropdown-menu">
          {sections.map((section) => (
            <li key={section.name.toLowerCase()}>
              <Link to={section.path} onClick={() => setIsOpen(false)}>
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
