import PropTypes from 'prop-types';
import {useState} from "react";
import {HiOutlineMinus} from "react-icons/hi2";
import {GoPlus} from "react-icons/go";

const Accordion = ({title,children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="border-b border-gray-200">
                <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h2 className={`cursor-pointer text-lg font-medium ${isOpen ? 'text-[--primary-color]':'text-black'}`}>{title}</h2>
                    {isOpen ? <HiOutlineMinus/> : <GoPlus/>}
                </div>
                {isOpen && (
                    <div className="cursor-pointer p-4 text-[--triadic-color-1]">
                        {children}
                    </div>
                )}
            </div>
        </>
    )
}


function AccordionSection({data}) {
    return (
        <>
            <div className=''>
                {data?.map((_data, index) => (
                    <Accordion key={index} title={_data?.title}>
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
};

AccordionSection.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};