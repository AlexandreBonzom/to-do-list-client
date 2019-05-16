import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./component/SearchBar";
import NewTask from "./component/NewTask";
import Header from "./component/Header";
import List from "./component/List";
import Button from "./component/Button";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks, error => console.log(error))
      .then(todos => setTodos(todos));
  }, []);

  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [onlyRemainingTasks, setFilter] = useState(false);

  const updateList = () => {
    axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks, error => console.log(error))
      .then(todos => setTodos(todos));
  };

  const handleInputChange = event => {
    if (event.target.name === "newTask") {
      setNewTask(event.target.value);
    } else if (event.target.name === "search") {
      setSearch(event.target.value);
    }
  };

  const handleAddClick = async () => {
    const newTodos = [...todos].map(todo => todo.task.toLowerCase());

    if (!newTodos.filter(task => task === newTask.toLowerCase()).length) {
      axios
        .post("https://to-do-list-server-exercice.herokuapp.com/create", {
          task: newTask
        })
        .then(() => updateList(), error => console.log(error))
        .then(() => setNewTask(""));
    }
  };

  const handleClickOnElement = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/update", {
        id: task._id,
        isDone: !task.isDone
      })
      .then(() => updateList(), error => console.log(error));
  };

  const handleDeleteClick = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(() => updateList(), error => console.log(error));
  };

  const handleClickSeeOnlyRemainingTask = () => {
    setFilter(!onlyRemainingTasks);
  };

  return (
    <div className="page">
      <div className="container">
        <Header />
        <SearchBar handleInputChange={handleInputChange} value={search} />

        <List
          todos={todos}
          onlyRemainingTasks={onlyRemainingTasks}
          search={search}
          toggleTask={handleClickOnElement}
          clickDelete={handleDeleteClick}
          clickHide={handleClickSeeOnlyRemainingTask}
        />
        <NewTask handleInputChange={handleInputChange} value={newTask} />
        <Button
          addTodo={handleAddClick}
          label="ajoute une tâche"
          name="add-task"
        />
      </div>
    </div>
  );
}

export default App;
