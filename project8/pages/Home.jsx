import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-title">
          HELLO, I'M
        </p>

        <h1>
          Praveen Kumar A
        </h1>

        <h2>
          Cyber Security Student
          <br />
          & Frontend Developer
        </h2>

        <p className="hero-description">
          I am a Cyber Security student and frontend developer
          based in Chennai. I build responsive and user-friendly
          web applications using modern web technologies.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="primary-btn">
            View My Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>

        </div>

      </div>

      <div className="hero-card">

        <div className="profile-circle">
          PK
        </div>

        <h3>
          B.E. CSE
        </h3>

        <p>
          Cyber Security
        </p>

        <span>
          2025 - 2029
        </span>

      </div>

    </section>
  );
}

export default Home;