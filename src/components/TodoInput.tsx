interface AppTodoProp {
  handleAddTodo: (todo: string) => void,
  todoValue:string,
  setTodoValue:(todoval:string) => void
}

export default function TodoInput({ todoValue, setTodoValue,handleAddTodo }: AppTodoProp) {
  
  return (
    <>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
            // console.log(e.target.value);
          }}
          type="text"
          placeholder="add todo..."
        ></input>
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("")
          }}
        >
          add
        </button>
      </header>
    </>
  );
}
