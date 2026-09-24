import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Homee";
import Semester1 from "./Semester1";
import Semester2 from "./Semester2";
import Semester3 from "./Semester3";
import Overall from "./Overall";

import "./index.css";
import "./App.css";

import photo from "./profile.png";
import signature from "./signature.png";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <h2>Student Report Card</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/semester1">Semester 1</Link>
          <Link to="/semester2">Semester 2</Link>
          <Link to="/semester3">Semester 3</Link>
          <Link to="/overall">Overall</Link>
        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              photo={photo}
              signature={signature}
            />
          }
        />

        <Route
          path="/semester1"
          element={<Semester1 />}
        />

        <Route
          path="/semester2"
          element={<Semester2 />}
        />

        <Route
          path="/semester3"
          element={<Semester3 />}
        />

        <Route
          path="/overall"
          element={<Overall />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;