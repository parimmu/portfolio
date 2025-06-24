import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dropdown from './Dropdown.jsx'; // Navigation component
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// We might want to import global styles here too
// import '../style.css'; // Assuming style.css is in the root

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* You might want to move the Dropdown into a dedicated Header component later */}
          <Dropdown />
          <h1>My Portfolio</h1> {/* This h1 was in index.html header, moving it here for now */}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* You can add a 404 Not Found route here later if needed */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>

        {/* Footer can also be part of this main layout */}
        <footer>
          <p>&copy; 2023 My Portfolio</p> {/* This was in index.html footer */}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
