import { useState } from 'react'
import TodoInputs from './components/TodoInputs'
import TodoRes from './components/TodoRes'
import { ITypes } from './types/ITypes';

function App() {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITypes[]>([]);


  const addFunc = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos(prev => ([...prev, { todo: todo, id: todos.length + 1, isColor: false }]))
      setTodo('')
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-5'>
      <TodoInputs addFunc={addFunc} todo={todo} setTodo={setTodo} />
      <TodoRes todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
