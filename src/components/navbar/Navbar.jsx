import {FaBars, FaTimes} from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import {useState} from "react";
import {Link} from "react-router-dom";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarLists = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Careers", path: "/careers" }
    ];

  return (
      <>
          <header className="bg-gray-800 text-white fixed w-full z-10">
              <div className="container mx-auto flex items-center justify-between p-4">
                  {/* Logo Section */}
                  <Link to="/">
                      <div className="flex items-center gap-2">
                          <img src={logo} alt="Logo" className="object-cover object-center"/>
                      </div>
                  </Link>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center gap-8">
                      {navbarLists.map((item, i) => (
                          <div key={`navbar-${i}`} className="relative group">
                              <Link to={item.path} className="hover:text-[--primary]">
                                  {item.name}
                              </Link>
                          </div>
                      ))}
                  </nav>

                  {/* Mobile Menu Toggle */}
                  <button
                      className="block md:hidden text-white"
                      onClick={() => setMenuOpen(!menuOpen)}
                  >
                      {menuOpen ? <FaTimes size={28}/> : <FaBars size={28}/>}
                  </button>
              </div>

              {/* Mobile Navigation */}
              <div
                  className={`fixed top-0 left-0 mt-[4.25em] pr-5 pl-0 h-full bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
                      menuOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  style={{
                      width: menuOpen ? "fit-content" : "0",
                      maxWidth: "400px",
                  }}
              >
                  {menuOpen && (
                      <ul className="flex flex-col p-4">
                          {navbarLists.map((item, i) => (
                              <li key={`mobile-nav-${i}`} className="mb-2">
                                  <Link
                                      to={item.path}
                                      className="block hover:bg-gray-600 p-2 rounded"
                                      onClick={() => setMenuOpen(false)}
                                  >
                                      {item.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  )}
              </div>
          </header>
      </>
  );
}

export default Navbar;



