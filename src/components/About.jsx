import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex items-center px-8 py-20"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <p className="text-lg text-gray-400 leading-8 mb-6">
          I am Hassane Outman Medila, a third-year Information Technology
          student at Andhra University with a strong interest in full-stack
          web development and software engineering.
        </p>

        <p className="text-lg text-gray-400 leading-8 mb-6">
          I enjoy building modern web applications and digital solutions
          that solve real-world problems. My experience includes developing
          community platforms, portfolio websites, and full-stack web
          applications using React, JavaScript, Node.js, MySQL, Git, and GitHub.
        </p>

        <p className="text-lg text-gray-400 leading-8">
          My long-term goal is to build impactful technology solutions for
          Africa, particularly in the fields of Education Technology (EdTech)
          and Financial Technology (FinTech). I am currently working on
          EduConnect Tchad and planning PayeFacile Tchad, projects aimed at
          improving access to education and digital financial services in Chad.
        </p>
      </motion.div>
    </section>
  );
}

export default About;