

import img2 from '../src/Image/img2.png';
import img3 from '../src/Image/img3.png'
import $ from 'jquery';

import './App.css';





function App() {
 
  // var acc = document.getElementsByClassName("accordion");
  

  function accordion(i){
    $(".panel["+i+"]").css('max-height', '10vh');
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
      <div class="page3">
      <h2 class="title3">
        Frequently asked questions
      </h2>

      <button class="accordion" onClick={accordion(1)}>
      Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
      </button>
      <div class="panel1">
      <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
      </div>

     <button class="accordion">
     Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
     </button>
     <div class="panel2">
     <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
     </div>

    <button class="accordion">
    Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
    </button>
    <div class="panel3">
    <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
    </div>

   </div>
      
    </div>
  );
}

export default App;
