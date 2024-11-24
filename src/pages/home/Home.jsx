import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import {PrimaryButton} from "../../components/button/primary-button/PrimaryButton.jsx";
import AccordionSection from "../../components/accordion/AccordionSection.jsx";
import {CardSection} from "../../components/section/CardSection.jsx";


function Home() {
    return (
        <>
            <div className="">
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
                <div className='px-5 sm:px-10 md:px-20 '>
                    {/*card sections*/}
                    <div className="">
                        <CardSection
                            img={img2}
                            title="Web & Mobile App Development"
                            text={"Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."}
                            path="/"
                            type="card-1"
                        />
                        <CardSection
                            img={img3}
                            title="Digital Strategy Consulting"
                            text={"Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."}
                            path="/"
                            type="card-2"
                        />
                    </div>

                    {/*FAQ*/}
                    <div className='w-full flex justify-center' >
                        <div className='w-full flex flex-col gap-10 py-10 md:py-14'>
                            <div className='w-full flex justify-center'>
                                <h2 className='text-[--primary-color] text-3xl font-semibold text-center'>Frequently asked
                                    questions
                                </h2>
                            </div>
                            <AccordionSection data={faqData}/>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
}

export default Home;

const faqData = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
        content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
        content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
        content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    }
];