import { addTodo } from './redux/actions';
import { selectTodos } from './redux/selectors'
import  { useSelector, useDispatch } from 'react-redux'


export default function AddTodo() {
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
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
    )
}
