import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <input {...props}
            className={`p-2 border-2 outline-none shadow-lg border-gray-300 rounded-md mb-4 ${props.className || ""}`}
        >
        </input>
    );
};

export default Input;
