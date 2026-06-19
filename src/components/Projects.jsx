import jobportal from "../assets/projects/jobportal.png";

function Projects() {
  const projects = [
    {
      title: "Job Portal",
      image: jobportal,
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
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-blue-400 mb-3">
              {project.tech}
            </p>

            <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm mb-4">
             {project.status}
            </span>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;