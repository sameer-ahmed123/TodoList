import TodoCard from "./TodoCard";

interface AppTodoProp {
  todos: Array<String>;
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
}

const TodoList = ({ todos, handleDeleteTodo,handleEditTodo }: AppTodoProp) => {
  return (
    <ul className="main">
      {todos.map((todo, todoindex) => {
        return (
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            key={todoindex}
            index={todoindex}
            handleEditTodo={handleEditTodo}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
