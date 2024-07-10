import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [todos, setTodo] = useState<string[]>([]);
  const [todoValue, settodoValue] = useState("");

  function persistData(newlist: Array<string>) {
    localStorage.setItem("todos", JSON.stringify({ todos: newlist }));
  }

  function handleAddTodo(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleEditTodo(index: number) {
    const valueTobeEdited = todos[index];
    console.log(todos[index]);
    settodoValue(valueTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    } else {
      let localTodos: any;
      localTodos = localStorage.getItem("todos");
      if (!localTodos) {
        return;
      }

      localTodos = JSON.parse(localTodos).todos;
      setTodo(localTodos);
    }
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={settodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
