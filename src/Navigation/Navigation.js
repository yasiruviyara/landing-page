import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

import logo from '../Image/logo.svg';
import './Navigation.css';
import '../App.js';
import $ from 'jquery';


// var logo1 = document.getElementById("logo");




function Navigation() {

  const navRef = useRef();



  const menu1 = () =>{
    // alert("hi");
    $(".logo").fadeToggle(200);
    $(".navigation").css('background-color','transparent');
    $(".navigation").css('height','100vh');
    $(".menu2").css('visibility','visible');
    $(".menu1").css('visibility',' hidden');  
    $(".navigation-bar").css('visibility','visible'); 
  }

  const menu2 = () =>{
    // alert("hi");
    $(".logo").fadeToggle(200);
    $(".navigation").css('background-color','var(--primary-color)');
    $(".navigation").css('height','14vh');
    $(".menu2").css('visibility','hidden');
    $(".menu1").css('visibility','visible'); 
    $(".navigation-bar").css('visibility','hidden');    
  }


  return (
    <div class="navigation container-fluid" id="navigation">
        <img src={logo} class="logo" alt="logo" id="logo"/>
        
        <nav class="navigation-bar" id="navigation-bar" ref={navRef}>
           <button onClick={menu2} className="menu2">
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
        <button onClick={menu1} className="menu1">
            <FaBars />
        </button>
    </div>
    
    
    
  );
}






export default Navigation;



