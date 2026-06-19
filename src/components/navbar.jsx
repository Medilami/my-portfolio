function Navbar() {
          return (
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                {"<Medila.dev />"}
                </h1>
        
                <ul className="flex gap-6">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </nav>
          );
        }
        
        export default Navbar;