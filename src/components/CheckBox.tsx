import React, { useState } from 'react';

interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked , onChange }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="hidden"
                onFocus={() => setIsFocused(true)} // Handles keyboard focus
                onBlur={() => setIsFocused(false)} // Clears focus when lost
            />
            <span
                className={`w-6 h-6  border  rounded-[6px] flex items-center justify-center transition-colors duration-300 ease-in-out
                    ${isHovered && 'border border-[#BDBDBD]   ' }
                    ${checked ? 'bg-[#5087F8]  border-none  ' : 'bg-white'}
                    ${(checked && isHovered) && 'outline outline-[3px] border-none outline-offset outline-[#ccd2e1]  bg-[#2469F6]'}
                    ${(!checked && isHovered) && ' bg-[#FFFFFF]'}
                    ${(!checked && isHovered && isFocused) && ' border-none outline outline-[3px] outline-offset outline-[#ccd2e1] '}
                    `}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                onMouseDown={() => setIsFocused(true)} 
                onMouseUp={() => setIsFocused(false)}
            >
                    <svg
                        className={`w-4 h-4 ${ isFocused
                                ? 'text-[#797979]  '
                                : 'text-white'
                            }  
                                ${ isHovered
                                ? 'text-[#E3E3E3]'
                                : 'text-white'
                            } transition-all duration-300 ease-in-out`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
            </span>
        </label>
    );
};

export default CheckBox;
