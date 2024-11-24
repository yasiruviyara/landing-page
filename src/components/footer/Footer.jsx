import logo from '../../assets/logo.svg';
import './Footer.css';

function Footer() {
  return (
      <>
        <div className="footer">
           <img src={logo} className="logo2" alt="logo" id="logo2"/>
           <p className="text4">
           Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
           </p>

           <div className="box5">
               <p className="title4">Our Technologies</p>
                <ul className='box5_1'>
                  <li className="text5">ReactJS</li>
                  <li className="text5">Gatsby</li>
                  <li className="text5">NextJS</li>
                  <li className="text5">NodeJS</li>
                </ul>
           </div>

           <div className="box6">
               <p className="title4">Our Services</p>
                <ul className='box5_1'>
                  <li className="text6">Social media Marketing</li>
                  <li className="text6">Web & Mobile App Development</li>
                  <li className="text6">Data & Analytics</li>
                </ul>
           </div>

           <div className="line"></div>
           <ul className="box7">
                <li className="text7">Privacy Policy</li>
                <li className="text7 text7_1">|</li>
                <li className="text7 text7_2">Terms & Conditions</li>
           </ul>
        </div>
      </>
  );
}

export default Footer;
