import React from 'react';
import  { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from './redux/selectors'
import './App.css';
import { addTodo } from './redux/actions';

function App() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  console.log("state:", todos)
  return (
    <div>
      <button onClick={() => {
        dispatch(addTodo(Math.random()))
      }}>Add Todo</button>
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
