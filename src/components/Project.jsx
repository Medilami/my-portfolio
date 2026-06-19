function Projects() {
          const projects = [
            {
              title: "Job Portal",
              description:
                "A full-stack job portal built with React, Node.js, and MySQL.",
              tech: "React • Node.js • MySQL",
            },
            {
              title: "EduConnect Tchad",
              description:
                "An education platform designed to improve access to learning resources.",
              tech: "React • JavaScript • CSS",
            },
            {
              title: "PayeFacile Tchad",
              description:
                "A FinTech project aimed at simplifying digital payments in Chad.",
              tech: "FinTech • React • MySQL",
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
                    className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition duration-300"
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
                  </div>
                ))}
              </div>
            </section>
          );
        }
        
        export default Projects;