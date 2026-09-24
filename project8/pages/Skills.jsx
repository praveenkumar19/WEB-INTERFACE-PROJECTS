function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "C",
    "C++",
    "Git",
    "GitHub",
    "Figma",
    "Cyber Security"
  ];

  return (
    <section className="page-section">

      <p className="section-label">
        MY SKILLS
      </p>

      <h1>
        Technologies I Work With
      </h1>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <h3>
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;