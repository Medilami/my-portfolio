function Navbar() {
          return (
            <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                {"<Medila.dev />"}
                </h1>
        
                <ul className="flex gap-6">
                <li>
  <a
    href="#about"
    className="hover:text-blue-400 transition"
  >
    About
  </a>
</li>
                  <li>
                    <a
                      href="#skills"
                      className="hover:text-blue-400 transition"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-blue-400 transition"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-400 transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          );
        }
        
        export default Navbar;