import React from "react";

interface todoProps {
  children: React.ReactNode;
  handleDeleteTodo: (index: number) => void;
  index: number;
  handleEditTodo: (index: number) => void;
}

export default function TodoCard({
  children,
  handleDeleteTodo,
  handleEditTodo,
  index,
}: todoProps) {
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
