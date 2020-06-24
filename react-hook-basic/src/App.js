import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./component/ColorBox";
import TodoList from "./component/ColorBox/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "My Sister's Keeper",
    },
    {
      id: 2,
      title: "Far From Home: The Adventures of Yellow Dog",
    },
    {
      id: 3,
      title: "Mother and Child",
    },
    {
      id: 4,
      title: "Beyond the Fear",
    },
    {
      id: 5,
      title: "Ring of Darkness",
    },
    {
      id: 6,
      title: "Lupin the Third: The Secret of Mamo",
    },
    {
      id: 7,
      title: "Garfield: The Movie",
    },
    {
      id: 8,
      title: "Aloha Summer",
    },
    {
      id: 9,
      title: "Wild Things: Diamonds in the Rough",
    },
    {
      id: 10,
      title: "66 Scenes From America",
    },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    console.log(index);

    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    console.log(newTodoList);

    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to react hook</h1>
        {/* <ColorBox /> */}
        <TodoList
          todos={todoList}
          onTodoCLick={(todo) => {
            handleTodoClick(todo);
          }}
        />
      </header>
    </div>
  );
}

export default App;
