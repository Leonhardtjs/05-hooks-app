import PropTypes from 'prop-types'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span aria-label="span" onClick={() => onToggleTodo(todo.id)} className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}>
                {todo.description}
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrrar</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
}