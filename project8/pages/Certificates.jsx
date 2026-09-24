function Certificates() {

  const certificates = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      description:
        "Responsive Web Design certification with a score of 100%."
    },

    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      description:
        "Introduction to Generative AI learning badge."
    },

    {
      title: "Cyber Virtual Experience Program",
      issuer: "Deloitte",
      description:
        "Cybersecurity virtual experience program through Forage."
    },

    {
      title: "Create and Manage Canvas Apps",
      issuer: "Microsoft",
      description:
        "Microsoft Applied Skills credential for Power Apps."
    }
  ];

  return (
    <section className="page-section">

      <p className="section-label">
        MY ACHIEVEMENTS
      </p>

      <h1>
        Certificates
      </h1>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <div
            className="certificate-card"
            key={index}
          >

            <span>
              CERTIFICATE 0{index + 1}
            </span>

            <h2>
              {certificate.title}
            </h2>

            <h3>
              {certificate.issuer}
            </h3>

            <p>
              {certificate.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;