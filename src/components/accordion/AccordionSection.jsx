import PropTypes from 'prop-types';
import {useRef, useState} from "react";
import {HiOutlineMinus} from "react-icons/hi2";
import {GoPlus} from "react-icons/go";

const Accordion = ({title,children,state}) => {
    const [isOpen, setIsOpen] = useState(state);
    const contentRef = useRef(null);

    return(
        <>
            <div className="border-b border-gray-200 select-none bg-[#FAF8FF] rounded-md transition-all duration-300">
                {/* Accordion Header */}
                <div
                    className="flex justify-between items-center gap-5 p-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h2
                        className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                            isOpen ? 'text-[--primary-color]' : 'text-black'
                        }`}
                    >
                        {title}
                    </h2>
                    <div>{isOpen ? <HiOutlineMinus size={24}/> : <GoPlus size={24}/>}</div>
                </div>

                {/* Accordion Content */}
                <div
                    ref={contentRef}
                    style={{
                        height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                        opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                >
                    <div className="p-4 text-[--triadic-color-1]">{children}</div>
                </div>
            </div>
        </>
    )
}


function AccordionSection({data}) {
    return (
        <>
            <div className=''>
                {data?.map((_data, index) => (
                    <Accordion key={index} title={_data?.title} state={index === 0}>
                        {_data?.content}
                    </Accordion>
                ))}
            </div>
        </>
    );
}

export default AccordionSection;

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    state: PropTypes.bool.isRequired,
};

AccordionSection.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};