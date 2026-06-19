import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 mb-3 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hassane Outman Medila
          </h1>

          <TypeAnimation
            sequence={[
              "IT Student",
              2000,
              "Full Stack Developer",
              2000,
              "Building EdTech Solutions",
              2000,
              "Building FinTech Solutions",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-2xl md:text-3xl text-blue-400 font-semibold"
          />

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Third-year IT student at Andhra University with a passion
            for full-stack web development. I build web applications,
            community platforms, and future EdTech and FinTech solutions
            designed to solve real-world challenges in Chad and Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

            <a
              href="https://github.com/Medilami"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hassane-outman-medila-3a46b832b"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Hassane Outman Medila"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;