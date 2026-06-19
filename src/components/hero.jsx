import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Hassane Outman Medila
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-gray-400">
            Full Stack Developer & IT Student
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl">
            Passionate about Full Stack Development, FinTech,
            EdTech, and building digital solutions that solve
            real-world problems in Chad and beyond.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="mailto:outmanimedilamy@gmail.com"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Hassane Outman Medila"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;