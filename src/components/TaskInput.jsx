import { Typography } from "@mui/material";
import React from "react";

const TaskInput = ({ task, handleChange, handleClickTaskAdd }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    handleClickTaskAdd();
  };

  return (
    <>
      <div className="taskinput-container">
        <form className="container" onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={handleClickTaskAdd} type="submit">
            Add Task
          </button>
        </form>
        <div className="error-container">
          {/* {task.trim().length <= 0 && (
            <Typography
              variant="body2"
              style={{
                color: "red",
                marginBottom: "10px",
                height: "100%",
              }}
            >
              Task cannot be empty
            </Typography>
          )} */}
        </div>
      </div>
    </>
  );
};

export default TaskInput;
