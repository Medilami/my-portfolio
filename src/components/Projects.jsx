function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description:
        "A full-stack job portal built with React, Node.js, and MySQL.",
      tech: "React • Node.js • MySQL",
      status: "Completed",
      github: "#",
      deployed: "https://mejobportal.netlify.app/",
    },
    {
      title: "EduConnect Tchad",
      description:
        "An EdTech platform designed to connect students, teachers, and educational resources in Chad.",
      tech: "React • Node.js • MySQL",
      status: "In Development",
      github: "#",
      deployed: "#",
      
    },
    {
      title: "PayeFacile Tchad",
      description:
        "A FinTech platform concept focused on simplifying digital payments and financial access in Chad.",
      tech: "React • FinTech • MySQL",
      status: "Planning Phase",
      github: "#",
      deployed: "#",
    },
  ];
        
          return (
            <section
              id="projects"
              className="bg-gray-950 text-white py-20 px-8"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                Projects
              </h2>
        
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="
                      bg-gray-900/70
                      backdrop-blur-lg
                      border
                      border-gray-800
                      rounded-xl
                      p-6
                      hover:border-blue-500
                      hover:-translate-y-2
                      transition-all
                      duration-300
                    "
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      {project.title}
                    </h3>
        
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
        
                    <p className="text-blue-400">
                      {project.tech}
                    </p>
                    <div className="flex gap-4 mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Live Demo
                      </a>
                      <p className="mt-3 text-sm text-yellow-400">
                         {project.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        }
        
        export default Projects;