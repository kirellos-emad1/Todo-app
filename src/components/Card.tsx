import React from 'react';

interface DevProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Card: React.FC<DevProps> = ({ children, ...props }) => {
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div {...props}
                className={`flex flex-col gap-4 bg-white rounded-md shadow-lg items-center justify-center  ${props.className || ""}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;
