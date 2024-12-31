import React from 'react';
import CheckBox from './CheckBox';
import { useTodoStore } from '../../zustand/store/todo';

interface TodoProps {
    text: string;
    checked: boolean;
    index: number;
}

const Todo: React.FC<TodoProps> = ({ text, checked, index }) => {
    const { toggleTodo } = useTodoStore();

    return (
        <li className="w-[240px] sm:w-80 h-10 flex items-center justify-between gap-2 px-2">
            <p className="font-montserrat text-[14px] leading-[18px] font-normal">
                {text}
            </p>
            <CheckBox checked={checked} onChange={() => toggleTodo(index)} />
        </li>
    );
};

export default Todo;
