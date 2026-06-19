function Skills() {
          const skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MySQL",
            "Git",
            "GitHub",
          ];
        
          return (
            <section
              id="skills"
              className="min-h-screen bg-black text-white px-8 py-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                Skills
              </h2>
        
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                        bg-gray-900
                        border
                        border-gray-800
                        p-6
                        rounded-xl
                        text-center
                        hover:scale-105
                        hover:border-blue-500
                        transition
                        duration-300
                        "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          );
        }
        
        export default Skills;