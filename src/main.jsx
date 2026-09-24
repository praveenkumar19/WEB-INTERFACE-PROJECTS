import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  { id: 1, name: "Project 1", path: "./project1/" },
  { id: 2, name: "Project 2", path: "./project2/" },
  { id: 3, name: "Project 3", path: "./project3/" },
  { id: 4, name: "Project 4", path: "./project4/" },
  { id: 5, name: "Project 5", path: "./project5/" },
  { id: 6, name: "Project 6", path: "./project6/" },
  { id: 7, name: "Project 7", path: "./project7/" },
  { id: 8, name: "Project 8", path: "./project8/" },
  { id: 9, name: "Project 9", path: "./project9/" },
  { id: 10, name: "Project 10", path: "./project10/" },
];

function App() {
  return (
    <div className="home">
      <header className="hero">
        <p className="subtitle">REACT • HTML • CSS • JAVASCRIPT</p>
        <h1>Web Interface Projects</h1>
        <p className="description">
          A collection of my web development projects.
        </p>
      </header>

      <main className="projects">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.path}
            className="project-card"
          >
            <div className="number">
              {String(project.id).padStart(2, "0")}
            </div>

            <div>
              <h2>{project.name}</h2>
              <p>View Project</p>
            </div>

            <span className="arrow">→</span>
          </a>
        ))}
      </main>

      <footer>
        <p>© 2026 Praveen Kumar</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);