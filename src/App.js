import React from 'react';
import './App.css';
import AddTodo from './redux/containers/addTodo';
import { useSelector } from 'react-redux';
import { selectTodos } from './redux/selectors';


function App() {
  const todos = useSelector(selectTodos)
  return (
    <div>
      <AddTodo />
      <ul>
        {
          todos.map((todo) => {
            return <li>{todos.id} {todo.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
