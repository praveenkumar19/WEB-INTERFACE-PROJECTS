function Contact() {
  return (
    <section className="page-section contact-section">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h1>
        Let's Connect
      </h1>

      <p className="contact-description">
        I'm open to internships, collaborations,
        projects and learning opportunities.
      </p>

      <div className="contact-grid">

        <div className="contact-card">

          <h3>Email</h3>

          <a href="mailto:praveenkumar.a.cyber29@princedrkvasudevan.com">
            praveenkumar.a.cyber29@princedrkvasudevan.com
          </a>

        </div>

        <div className="contact-card">

          <h3>GitHub</h3>

          <a
            href="https://github.com/praveenkumar19"
            target="_blank"
            rel="noreferrer"
          >
            github.com/praveenkumar19
          </a>

        </div>

        <div className="contact-card">

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/praveen-kumar-792b8a395/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;