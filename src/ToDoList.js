import React, { useState } from "react";
import "./index.css";
import { MdDelete } from "react-icons/md";
import { FaRegHandPointUp } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import { SiTourbox } from "react-icons/si";
import { useTour } from "@reactour/tour";

function ToDoList() {
  const { setIsOpen } = useTour();
  const [tasks, setTasks] = useState([
    "Tomar Café da manhã",
    "Estudar algoritmos",
    "Tomar medicação",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index > tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          className="input-task"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-button">
              <MdDelete />
            </button>
            <button id='moveUp' onClick={() => moveTaskUp(index)} className="move-button">
              <FaRegHandPointUp />
            </button>
            <button id='moveDown' onClick={() => moveTaskDown(index)} className="move-button">
              <FaRegHandPointDown />
            </button>
          </li>
        ))}
      </ol>
      <button className="tour-button" onClick={() => setIsOpen(true)}><SiTourbox /></button>
    </div>
  );
}

export default ToDoList;
