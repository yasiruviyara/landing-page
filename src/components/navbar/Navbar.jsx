import {FaBars, FaTimes} from 'react-icons/fa';
import { RiCloseLargeFill } from "react-icons/ri";
import logo from '../../assets/logo.svg';
import {useState} from "react";
import {Link} from "react-router-dom";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarLists = [
        // { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Careers", path: "/careers" }
    ];

  return (
      <>
          <header className="bg-[--primary-color] text-white relative w-full z-10">
              <div className="w-full flex items-center justify-between px-4 sm:px-10 py-3 sm:py-5">
                  {/* Logo Section */}
                  <Link to="/">
                      <div className="flex items-center gap-2">
                          <img src={logo} alt="Logo" className="w-[220px] object-cover object-center"/>
                      </div>
                  </Link>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center gap-7 ">
                      {navbarLists.map((item, i) => (
                          <div key={`navbar-${i}`} className="relative group">
                              <Link to={item.path} className="text-sm font-medium hover:text-gray-200 uppercase">
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
                      {!menuOpen && <FaBars size={28}/>}
                  </button>
              </div>

              {/* Mobile Navigation */}
              <div
                  className={`fixed top-0 left-0 px-5 py-4 h-full bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
                      menuOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  style={{
                      width: menuOpen ? "100%" : "0",
                      maxWidth: "480px",
                  }}
              >
                  {menuOpen && (
                  <div className='relative'>
                      <div className='w-full flex justify-end absolute'>
                          <button
                              className="block md:hidden text-black"
                              onClick={() => setMenuOpen(!menuOpen)}
                          >
                              <RiCloseLargeFill size={24}/>
                          </button>
                      </div>

                      <ul className="flex flex-col p-4 gap-6 pt-6">
                          {navbarLists.map((item, i) => (
                              <li key={`mobile-nav-${i}`} className="">
                                <Link
                                      to={item.path}
                                      className="text-base font-medium uppercase"
                                      onClick={() => setMenuOpen(false)}
                                  >
                                      {item.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>
                  )}
              </div>
          </header>
      </>
  );
}

export default Navbar;



