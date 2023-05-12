import { TodoAdd, TodoList } from "./components";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

  const { todos, todosCount, pendingTodoCount, handleDeleteTodo, handleToggleTodo, onNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodoCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ onNewTodo } />
        </div>
      </div>
    </>
  )
}
