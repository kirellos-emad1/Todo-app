import { useEffect, useState } from 'react';
import Button from './components/Button';
import { useTodoStore } from '../zustand/store/todo';
import TodoList from './components/TodoList';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const { todos, addTodo, toggleAllTodos, setTodos } = useTodoStore();
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showManagePopup, setShowManagePopup] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, [setTodos]);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
      setShowAddPopup(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 sm:p-10 md:p-20">
      <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl">TO DO</h1>
      <div className="mt-5">
        <Input
          type="text"
          placeholder="Search for a Todo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[280px] sm:w-80 md:w-96 h-10"
        />
      </div>
      <Button className="w-[280px] sm:w-80 md:w-96 h-10 mb-5" onClick={() => setShowAddPopup(true)}>
        Add New To-Do
      </Button>
      {showAddPopup && (
        <Card className="w-[280px] sm:w-80 md:w-96 p-5">
          <h2 className="font-montserrat">Add Todo</h2>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="TODO"
            className="w-[240px] sm:w-72 md:w-80  h-12"
          />
          <div className="flex flex-col gap-3 mt-2 ">
            <hr className="w-[240px] sm:w-80 md:w-96" />
            <div className="flex items-center gap-2 px-8">
              <Button className="w-14 h-8" onClick={handleAddTodo}>Add</Button>
              <Button className="w-14 h-8" onClick={() => setShowAddPopup(false)}>Close</Button>
            </div>
          </div>
        </Card>
      )}
      {showManagePopup && (
        <Card className="w-[320px] sm:w-[380px] md:w-[440px] p-8">
          <TodoList todos={todos} setShowManagePopup={setShowManagePopup}>
            <div className="flex flex-col gap-2">
              <div className="w-[240px] sm:w-80 h-10 flex items-center justify-between gap-2 px-2">
                <p className="font-montserrat text-[14px]">All todos</p>
                <CheckBox checked={todos.every(todo => todo.checked)} onChange={toggleAllTodos} />
              </div>
              <hr />
            </div>
          </TodoList>
        </Card>
      )}
      <div className="flex flex-col items-center gap-8">
        <TodoList todos={filteredTodos} />
        <Button className="w-[280px] sm:w-80 md:w-96 h-10" onClick={() => setShowManagePopup(true)}>
          Manage To-Dos
        </Button>
      </div>
    </div>
  );
}

export default App;
