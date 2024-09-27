import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

const titleClass = "text-base font-bold text-nowrap leading-[33px] text-white";

const Accordion = ({ title, content, isOpen, setIsOpen, id }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full px-4 py-3 text-left text-white bg-transparent focus:outline-none"
                onClick={() => isOpen ? setIsOpen(null) : setIsOpen(id)}
            >
                <span className={titleClass}>{title}</span>
                <span className='font-thin'>{isOpen ? <FaMinus fontSize={14} /> : <FaPlus fontSize={14} />}</span>
            </button>
            <div className={`px-4 transition-height transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                {content}
            </div>
        </div>
    );
};

export default Accordion;