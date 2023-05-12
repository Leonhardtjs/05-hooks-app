import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({ 
        description: '',
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} name="description" type="text" placeholder="¿Qué hay que hacer?" className="form-control" value={description} />
            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    )
}


TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}