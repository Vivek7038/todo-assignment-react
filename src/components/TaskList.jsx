import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import { Clear as ClearIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  toggleTaskComplete,
  deleteTask,
  setTask,
  setShowPopup,
  setEditTaskId,
} from "../slices/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.taskList);

  function handleChangeCheckBox(id) {
    dispatch(toggleTaskComplete(id));
  }

  function handleDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  function handleTaskEdit(id, text) {
    dispatch(setEditTaskId(id));
    dispatch(setShowPopup(true));
  }

  return (
    <section className="todoListContainer">
      {taskList.map((task) => (
        <div key={task.id} className="todoItem">
          <div className="container">
            <div className="checkBox">
              <Checkbox
                sx={{
                  color: "rgba(227, 221, 211, 0.428)",
                }}
                checked={task.isChecked}
                onChange={() => handleChangeCheckBox(task.id)}
              />
            </div>

            <div className="itemName">
              <p className={task.isChecked ? "strikethrough" : ""}>
                {task.text}
              </p>
            </div>
          </div>

          <div className="icons">
            <EditIcon
              onClick={() => handleTaskEdit(task.id, task.text)}
              sx={{
                cursor: "pointer",
                fontSize: "1.5em",
                transition: "font-size 0.3s",
                ":hover": {
                  fontSize: "1.7em",
                  color: "#59C2FF",
                },
              }}
            />

            <ClearIcon
              onClick={() => handleDeleteTask(task.id)}
              sx={{
                cursor: "pointer",
                fontSize: "1.7em",
                transition: "font-size 0.3s",
                ":hover": {
                  fontSize: "1.75em",
                  color: "#59C2FF",
                },
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TaskList;
