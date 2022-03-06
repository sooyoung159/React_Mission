import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  const preData = JSON.parse(window.localStorage.getItem("todoItem"));
  const [todoData, setTodoData] = useState(preData ? preData : []);
  const [value, setValue] = useState();

  // useEffect(() => {
  //   const preData = JSON.parse(window.localStorage.getItem("todoItem"));
  //   setTodoData(preData);
  // }, []);
  useEffect(() => {
    // console.log(todoData);
    saveData(todoData);
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      complete: false,
    };
    setTodoData([...todoData, newTodo]);
    console.log(todoData);
    setValue("");
    // saveData(todoData);
  };

  const allDeleteHandler = () => {
    setTodoData([]);
  };

  const saveData = (todoData) => {
    window.localStorage.setItem("todoItem", JSON.stringify(todoData));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button
            onClick={allDeleteHandler}
            className="bg-blue-200 p-2 text-blue-400 border-2border-blue-400 rounded hover:text-white hover"
          >
            모두 지우기
          </button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
