import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import {PrimaryButton} from "../../components/button/primary-button/PrimaryButton.jsx";

function Home() {
    return (
        <>
            <div className="main2">
                {/*hero section*/}
                <div className='h-fit relative'>
                    <img src={img1 || `https://img.freepik.com/premium-photo/credit-card-laptop-wooden-table-indoors_44344-457.jpg?w=900`} alt="img" className='w-full h-56 object-cover xs:h-full md:h-[90vh]' loading='lazy'/>
                    <div className='flex flex-col gap-5 items-start pt-6 pr-5 pb-8 pl-5 bg-custom-gradient w-full md:w-1/2 md:absolute md:bottom-5 left-5'>
                        <h1 className="text-4xl md:text-4xl font-bold text-white">
                            We Crush Your
                            Competitors, Goals, And
                            Sales Records - Without
                            The B.S.
                        </h1>
                        <PrimaryButton text="GET FREE CONSULTATION" path="/"/>
                    </div>
                </div>

                <div className="page2">
                    <div className="box2">
                        <img src={img2} className="img2" alt="img2"/>
                        <h2 className="title1">
                            Web & Mobile App Development
                        </h2>
                        <p className="text2">
                            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks
                            which tailor content and engagement methods to respond to different intents shown by your
                            potential customers who interact with your business online.
                        </p>
                        <button className="button2">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="box3">
                        <img src={img3} className="img3" alt="img3"/>
                        <h2 className="title2">
                            Digital Strategy Consulting
                        </h2>
                        <p className="text3">
                            Your digital strategy should complement the overall marketing strategy of the company. In
                            online marketing, each component will never work in isolation and every business needs a
                            different mix. We provide a clear concept and strategic overview to find the most efficient
                            model for your business.
                        </p>
                        <button className="button3">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="page3">
                    <h2 className="title3">
                        Frequently asked questions
                    </h2>
                    <button className="accordion">
                        Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                    </button>
                    <div className="panel1">
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum
                            ultrices
                            nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                    </div>
                    <button className="accordion">
                        Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                    </button>
                    <div className="panel2">
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum
                            ultrices
                            nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                    </div>
                    <button className="accordion">
                        Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                    </button>
                    <div className="panel3">
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum
                            ultrices
                            nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;