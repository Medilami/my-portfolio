import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          I am currently seeking internships, collaboration
          opportunities, and software development projects.
          Feel free to connect with me if you'd like to work
          together or discuss technology, EdTech, or FinTech.
        </p>

        <div className="flex justify-center gap-8 text-4xl">
          <a
            href="https://github.com/Medilami"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hassane-outman-medila-3a46b832b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:outmanimedilamy@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-10">
          <a
            href="mailto:outmanimedilamy@gmail.com"
            className="inline-block bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;