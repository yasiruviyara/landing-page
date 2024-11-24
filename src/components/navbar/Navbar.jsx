import {FaBars, FaTimes} from 'react-icons/fa';


import logo from '../../assets/logo.svg';


function Navbar() {

  return (
    <div className="navigation container-fluid" id="navigation">
        <img src={logo} className="logo" alt="logo" id="logo"/>
        <nav className="navigation-bar" id="navigation-bar" >
           <button className="menu2">
              <FaTimes />
          </button>
          <ul className="list-unstyled">
            <li className="">HOME</li>
            <li className="">SERVICES</li>
            <li className="">ABOUT US</li>
            <li className="">CONTACT US</li>
            <li className="">CAREERS</li>
          </ul>
        </nav>
        <button className="menu1">
            <FaBars />
        </button>
    </div>
  );
}

export default Navbar;



