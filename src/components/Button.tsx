import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}
            className={`bg-[#FFCE22] text-[14px] font-normal font-montserrat leading-[18px] rounded-[4px] hover:bg-[#FFD84D] transition-all duration-300 ease-in-out ${props.className || ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
