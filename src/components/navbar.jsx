import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          {"<Medila.dev />"}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;