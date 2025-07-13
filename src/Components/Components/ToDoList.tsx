import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>(["Eat Breakfast", "Take A Shower", "Walk The Dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Place A String");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">TO-DO LIST</h1>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition" onClick={addTask}>
            Add
          </button>
        </div>
        <ol className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-50 border rounded px-3 py-2">
              <span className="flex-1">{task}</span>
              <div className="flex gap-1">
                <button className="bg-red-500 text-black px-2 py-1 rounded hover:bg-red-600 transition" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-600 transition" onClick={() => moveTaskUp(index)}>
                  Up
                </button>
                <button className="bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-600 transition" onClick={() => moveTaskDown(index)}>
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
