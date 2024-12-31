import React from 'react';
import Todo from './Todo';
import Button from './Button';

interface Todo {
    text: string;
    checked: boolean;
}

interface TodoListProps {
    todos: Todo[];
    children?: React.ReactNode;
    setShowManagePopup?: (value: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, children, setShowManagePopup }) => {
    return (
        <ul className="w-[280px] sm:w-80 md:w-96 flex flex-col items-center rounded-md shadow-lg p-5 gap-2 border-2">
            {children}
            {todos.length === 0 && <p className="font-montserrat text-[14px]">No todos found</p>}
            {todos.map((todo, index) => (
                <Todo key={index} index={index} text={todo.text} checked={todo.checked} />
            ))}
            {setShowManagePopup && (
                <div className="flex flex-col gap-5">
                    <hr />
                    <Button className="w-[240px] sm:w-80 md:w-[340px] h-10" onClick={() => setShowManagePopup(false)}>
                        Close
                    </Button>
                </div>
            )}
        </ul>
    );
};

export default TodoList;
