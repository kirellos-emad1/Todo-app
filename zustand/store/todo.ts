import { create } from 'zustand';

interface Todo {
    text: string;
    checked: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (index: number) => void;
    toggleAllTodos: () => void;
    setTodos: (todos: Todo[]) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({
        todos: [...state.todos, { text, checked: false }]
    })),
    toggleTodo: (index) => set((state) => ({
        todos: state.todos.map((todo, i) =>
            i === index ? { ...todo, checked: !todo.checked } : todo
        )
    })),
    toggleAllTodos: () => set((state) => {
        const allChecked = state.todos.every(todo => todo.checked);
        return {
            todos: state.todos.map(todo => ({ ...todo, checked: !allChecked }))
        };
    }),
    setTodos: (todos) => set({ todos })
}));
