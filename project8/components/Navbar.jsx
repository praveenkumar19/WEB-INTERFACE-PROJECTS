import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        PK<span>.</span>
      </Link>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/skills">Skills</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/certificates">Certificates</Link>

        <Link to="/contact">Contact</Link>

      </nav>

    </header>
  );
}

export default Navbar;