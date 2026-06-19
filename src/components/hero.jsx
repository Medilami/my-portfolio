function Hero() {
          return (
           <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <p className="text-blue-400 mb-3">
                Hello, I'm
              </p>
        
              <h1 className="text-5xl md:text-7xl font-bold text-center">
                Hassane Outman Medila
              </h1>
        
              <h2 className="mt-4 text-2xl md:text-3xl text-gray-400">
                Full Stack Developer
              </h2>
        
              <p className="mt-6 max-w-2xl text-center text-gray-500">
                IT student passionate about web development,
                FinTech solutions, and building digital products
                that solve real-world problems.
              </p>
        
              <div className="mt-8 flex gap-4">
                <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                <a
                    href="#projects"
                    className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
                      >
                  View Projects
                </a>
                </button>
        
                <button className="border border-white px-6 py-3 rounded-lg">
                  Download CV
                </button>
              </div>
            </section>
          );
        }
        
        export default Hero;