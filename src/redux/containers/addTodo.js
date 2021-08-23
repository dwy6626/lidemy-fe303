import { addTodo } from '../actions';
import { selectTodos } from '../selectors'
import  { connect } from 'react-redux'
import AddTodo from '../components/addTodo'


const mapStateToProps = (store) => {
    return { todos: selectTodos(store) }
}

const mapDispatchToProps = { addTodo }

// smart component / container
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
