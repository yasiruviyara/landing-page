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
          <div className='bg-[--primary-color] text-white pt-8 pb-3'>
              <div className='container mx-auto flex flex-wrap justify-between px-6'>
                  <div className='w-full md:w-1/2 mb-8 md:mb-0 px-5'>
                      <div className="cursor-pointer mb-6 pt-1" onClick={() => navigatePath('/')}>
                          <img src={logo} alt='Logo' className='w-1/3 md:w-1/2 object-cover object-center'/>
                      </div>
                      <p className='mb-4 text-base md:text-sm w-3/4'>
                          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                      </p>
                  </div>
                  <div className='w-full md:w-1/2 flex flex-wrap justify-between px-5'>
                      {subHeaders.map((header, index) => (
                          <div key={index} className='mb-4'>
                              <p className='font-bold mb-2 text-lg'>{header.headerName}</p>
                              <ul>
                                  {header.itemTexts.map((text, subIndex) => (
                                      <li key={subIndex} className='w-3/4 flex items-center mb-2 cursor-pointer text-base md:text-sm'>
                                          {text}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>
              <div className='w-full flex justify-center'>
                  <div className='bg-white h-[1px] mt-8 mb-2 w-2/4'></div>
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
