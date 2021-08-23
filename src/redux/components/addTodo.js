export default function AddTodo({ addTodo }) {
    return (
        <div>
            <button onClick={() => {
                addTodo(Math.random())
            }}>Add Todo</button>
        </div>
    )
}
