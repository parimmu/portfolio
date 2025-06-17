import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['About', 'Experience', 'Projects', 'Resume', 'Contact'];

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
            <li key={section.toLowerCase()}>
              <a href={} onClick={() => setIsOpen(false)}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
