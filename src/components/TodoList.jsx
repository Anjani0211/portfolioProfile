import { useState } from "react";

const TodoList = () => {
  //Local Storage se task get krna
  const getSavedTasks = () => {
    const savedTask = localStorage.getItem("tasks");
    if (savedTask) {
      return JSON.parse(savedTask);
    } else {
      return [];
    }
  }; 
  
  const [tasks, setTasks] = useState(getSavedTasks());
  const [newTask, setNewTask] = useState("");

  // to generate tasks with Unique ID
  const addTask = () => {
    if (newTask.trim() !== ""){
      const taskObj = {
        id: Date.now(), // Unique ID
        text: newTask,

      };
      const updatedTasks = [...tasks, taskObj];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); //Local Storage me task save krna
      setNewTask("");
    }
  };

  // to delete task

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); //Local Storage me task update krna
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 className="text-4xl "style={{ color: "#4CAF50" }}> PARADOX</h2>

      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />
      <button
        onClick={addTask}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add Task
      </button>

      {/* ✅ Agar list empty ho to message show karna */}
      {tasks.length === 0 ? (
        <p style={{ color: "red", marginTop: "10px" }}>❌ No tasks available</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                background: "#f9f9f9",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)"
              }}
            >
              {task.text}
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#f44336",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

};


export default TodoList;
