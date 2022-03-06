import React, { useRef, useState } from "react";

const List = (props) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.title);
  const editRef = useRef();

  const handleCompleteChange = (id) => {
    let newTodoData = props.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    props.setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = props.todoData.filter((data) => data.id !== id);
    props.setTodoData(newTodoData);
  };

  const editHandler = (id) => {
    if (edit) {
      let newTodoData = props.todoData.map((data) => {
        if (data.id === id) {
          data.title = editText;
        }
        return data;
      });
      props.setTodoData(newTodoData);
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const changeHandler = (event) => {
    setEditText(event.target.value);
  };

  return (
    <div
      key={props.id}
      {...props.provided.draggableProps}
      ref={props.provided.innerRef || " "}
      {...props.provided.dragHandleProps}
      className={`${
        props.snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => handleCompleteChange(props.id)}
        />
      </div>
      {edit ? (
        <input
          type="text"
          ref={editRef}
          value={editText}
          onChange={changeHandler}
          autoFocus
        />
      ) : (
        <span className={props.completed ? "line-through" : null}>
          {props.title}
        </span>
      )}
      <div>
        <button
          className="px-4 py-2 mx-1 float-light bg-gray-200 p-2 text-gray-400 border-2border-blue-400 rounded hover:text-white hover"
          onClick={() => editHandler(props.id)}
        >
          {edit ? "적용" : "수정"}
        </button>

        <button
          className="px-4 py-2 float-light bg-gray-200 p-2 text-gray-400 border-2border-blue-400 rounded hover:text-white hover"
          onClick={() => handleClick(props.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default List;
