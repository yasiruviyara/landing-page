import PropTypes from 'prop-types';
import {PrimaryButton} from "../button/primary-button/PrimaryButton.jsx";

export const CardSection = ({img,title,text,path,type}) => {
    return (
        <>
            <div className={`mt-10 w-full flex justify-between sm:justify-between items-center flex-col ${type === 'card-1' ? 'sm:flex-row':'sm:flex-row-reverse'} `}>
                <div className='w-fulll sm:w-1/2 md:w-[40%] md:p-5 pt-0 flex justify-center'>
                    <img src={img} className="w-full lg:w-2/3 h-fit object-cover" alt={title}/>
                </div>
                <div className='w-full sm:w-1/2 md:w-[60%] flex flex-col items-center sm:items-start gap-5'>
                    <h2 className="text-[--primary-color] font-semibold text-3xl text-center sm:text-left">
                        {title}
                    </h2>
                    <p className="text-black font-normal text-base">
                        {text}
                    </p>
                    <PrimaryButton text="LEARN MORE" path={path}/>
                </div>
            </div>
        </>
    )
}


CardSection.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string,
    type: PropTypes.string,
};