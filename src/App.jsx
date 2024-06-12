import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import { setTask, addTask, setTaskList } from "./slices/taskSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { task, taskList ,error} = useSelector((state) => state.tasks);

  // Load task list from localStorage on initial render
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    if (taskList.length === 0) {
      dispatch(setTaskList(storedTaskList));
    }
  }, [dispatch, taskList.length]);

  // Update localStorage whenever the taskList changes
  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [dispatch, taskList]);

  const handleClickTaskAdd = () => {
    dispatch(addTask());
  };

  const handleChange = (e) => {
    dispatch(setTask(e.target.value));
  };

  return (
    <>
      <main>
        <h1 className="app-heading">React Todo</h1>
        <TaskInput
          task={task}
          handleChange={handleChange}
          handleClickTaskAdd={handleClickTaskAdd}
          error={error}
        />
        <TaskList />
      </main>
      <EditModal />
    </>
  );
}

export default App;
