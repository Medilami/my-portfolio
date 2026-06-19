import { motion } from "framer-motion";
import jobportal from "../assets/projects/jobportal.png";
import community from "../assets/projects/community.png";
import eho from "../assets/projects/eho.png";

function Projects() {
  const projects = [
    {
      title: "Job Portal",
      image: jobportal,
      description:
        "A full-stack job portal that helps job seekers discover opportunities and employers manage job listings.",
      tech: "React • Node.js • MySQL",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      github: "#",
      deployed: "https://mejobportal.netlify.app/",
    },

    {
      title: "Chadian Community Vizag",
      image: community,
      description:
        "A community platform for Chadian students in Visakhapatnam featuring announcements, information, and community resources.",
      tech: "React • Tailwind CSS • JavaScript",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      github: "#",
      deployed: "https://chadiancommunityvizag.netlify.app/",
    },

    {
      title: "EHO Company",
      image: eho,
      description:
        "A modern business website developed to showcase company services, information, and digital presence through a responsive user interface.",
      tech: "React • JavaScript • Tailwind CSS",
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      github: "#",
      deployed: "https://ehocompany.netlify.app/",
    },

    {
      title: "EduConnect Tchad",
      description:
        "An EdTech platform designed to connect students, teachers, and educational resources across Chad.",
      tech: "React • Node.js • MySQL",
      status: "In Development",
      statusColor: "bg-yellow-500/20 text-yellow-400",
      github: "#",
      deployed: "#",
    },

    {
      title: "PayeFacile Tchad",
      description:
        "A FinTech solution focused on improving access to digital payments and financial services in Chad.",
      tech: "React • Node.js • MySQL",
      status: "Planning Phase",
      statusColor: "bg-purple-500/20 text-purple-400",
      github: "#",
      deployed: "#",
    },

    {
      title: "Hostel Management System",
      description:
        "A full-stack hostel management platform for room allocation, student records, occupancy tracking, and fee management.",
      tech: "React • Node.js • Express.js • MySQL",
      status: "Planning Phase",
      statusColor: "bg-purple-500/20 text-purple-400",
      github: "#",
      deployed: "#",
    },

    {
      title: "School Management System",
      description:
        "A full-stack school management platform for managing students, teachers, attendance, classes, and academic records.",
      tech: "React • Node.js • Express.js • MySQL",
      status: "Planning Phase",
      statusColor: "bg-purple-500/20 text-purple-400",
      github: "#",
      deployed: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          Completed projects, ongoing development, and future solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg mb-5"
                />
              )}

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${project.statusColor}`}
              >
                {project.status}
              </span>

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-blue-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4 flex-wrap">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                  >
                    GitHub
                  </a>
                )}

                {project.deployed !== "#" && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;