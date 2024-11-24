import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";


export const PrimaryButton = ({text,path}) => {
    const navigate = useNavigate()

    return (
        <>
        <button className="bg-[--secondary-color] rounded px-5 py-3"  onClick={() => navigate(path)}>
            <p className='text-sm font-bold text-white'>{text}</p>
        </button>
        </>
    )
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string,
};