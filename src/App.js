

import img2 from '../src/Image/img2.png';
import img3 from '../src/Image/img3.png'

import './App.css';






function App() {

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     } 
     });
  }



  return (
    <div className="main2">
      <div className="img1" id="img1">

         <div className="box1">
           <h1 className="text1">
              We Crush Your
              Competitors, Goals, And
              Sales Records - Without
              The B.S.
           </h1>
         <button className="button1">
           GET FREE CONSULTATION
         </button>
        </div>


      </div> 
      <div className="page2">
         <div className="box2">
           <img src={img2} class="img2" alt="img2"/>
           <h2 className="title1">
             Web & Mobile App Development
           </h2>
           <p className="text2">
           Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
           </p>
           <button className="button2">
                LEARN MORE
           </button>

         </div>

         <div className="box3">
           <img src={img3} class="img3" alt="img3"/>
           <h2 className="title2">
              Digital Strategy Consulting
           </h2>
           <p className="text3">
           Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
           </p>
           <button className="button3">
                LEARN MORE
           </button>

         </div>

      </div>
      <div className="page3">
      <h2>Accordion</h2>

      <button class="accordion">Section 1</button>
      <div class="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

     <button class="accordion">Section 2</button>
     <div class="panel">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     </div>

    <button class="accordion">Section 3</button>
    <div class="panel">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

   </div>
      
    </div>
  );
}

export default App;
