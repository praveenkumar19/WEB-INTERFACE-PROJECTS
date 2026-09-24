function Projects() {

  const projects = [
    {
      title: "SIH Integrated Project Monitoring Platform",
      description:
        "A web-based platform for monitoring infrastructure projects, progress, cost, milestones and project risks.",
      github:
        "https://github.com/praveenkumar19/SIH-PLATFORM-MONITOR",
      demo:
        "https://sih-platform-monitor-q3na.onrender.com/"
    },

    {
      title: "Public Toilet Complaint Management System",
      description:
        "A web application for citizens to report public toilet complaints and for administrators to manage them.",
      github:
        "https://github.com/praveenkumar19/PUBLIC-TOILET-COMPLAINT-MANAGEMENT-SYSTEM"
    },

    {
      title: "Doctor Website",
      description:
        "A responsive healthcare website created using HTML, CSS and JavaScript.",
      github:
        "https://github.com/praveenkumar19/DOCTOR-WEBSITE",
      demo:
        "https://praveenkumar19.github.io/DOCTOR-WEBSITE/"
    },

    {
      title: "FreshMart Grocery Website",
      description:
        "A modern grocery shopping website with responsive layouts and interactive frontend features.",
      github:
        "https://github.com/praveenkumar19/GROCERY-WEBSITE",
      demo:
        "https://praveenkumar19.github.io/GROCERY-WEBSITE/"
    },

    {
      title: "College Website",
      description:
        "A responsive college website designed using frontend web technologies.",
      github:
        "https://github.com/praveenkumar19/COLLEGE-WEBSITE",
      demo:
        "https://praveenkumar19.github.io/COLLEGE-WEBSITE/"
    },

    {
      title: "React Calculator",
      description:
        "A calculator application built using React with component-based UI and state management.",
      github:
        "https://github.com/praveenkumar19/REACT-CALCULATOR"
    }
  ];

  return (
    <section className="page-section">

      <p className="section-label">
        MY WORK
      </p>

      <h1>
        Projects
      </h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <span>
              0{index + 1}
            </span>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.description}
            </p>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;