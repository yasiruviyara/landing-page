import logo from '../../assets/logo.svg';
import './Footer.css';

const subHeaders = [
    {
        headerName: "Our Technologies",
        itemTexts: [
            "ReactJS",
            "Gatsby",
            "NextJS",
            "NodeJS",
        ]
    },
    {
        headerName: "Our Services",
        itemTexts: [
            "Social media Marketing",
            "Web & Mobile App Development",
            "Data & Analytics",
        ],
    },
];



function Footer() {

    const navigatePath = (path) => {
        if (path) {
            window.location.href = path;
        }
    }

  return (
      <>
          <div className='bg-[--primary-color] text-white px-5 md:px-10 pt-10 pb-2 md:pb-4 relative'>
              <div className='container flex flex-col lg:flex-row flex-wrap justify-between gap-14 lg:gap-0'>
                  <div className='w-full lg:w-1/2'>
                      <div className="cursor-pointer mb-6 pt-1" onClick={() => navigatePath('/')}>
                          <img src={logo} alt='Logo' className='w-[220px] lg:w-auto object-cover object-center'/>
                      </div>
                      <p className='text-base w-3/4'>
                          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                      </p>
                  </div>
                  <div className='w-full lg:w-1/2 flex flex-col md:flex-row gap-10 md:gap-20 flex-wrap justify-start lg:justify-between '>
                      {subHeaders.map((header, index) => (
                          <div key={index} className=''>
                              <p className='font-bold mb-2 text-xl'>{header.headerName}</p>
                              <ul>
                                  {header.itemTexts.map((text, subIndex) => (
                                      <li key={subIndex} className='w-full md:w-3/4 flex items-center mb-2 cursor-pointer text-sm md:text-sm'>
                                          {text}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>
              <div className='w-full flex justify-center'>
                  <div className='bg-white h-[1px] mt-8 mb-2 w-full md:w-3/4'></div>
              </div>
              <div className='w-full flex gap-4 justify-center'>
                  <div className="cursor-pointer text-sm">Privacy Policy</div>
                  <p className="">|</p>
                  <div className="cursor-pointer text-sm">Terms & Conditions</div>
              </div>
          </div>

      </>
  );
}

export default Footer;
