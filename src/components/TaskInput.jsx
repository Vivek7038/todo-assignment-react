import { Typography } from "@mui/material";
import React from "react";

const TaskInput = ({
  task,
  error,
  handleChange,
  handleClickTaskAdd,
  maxCharacterLimit,
}) => {
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
          <button type="submit">Add Task</button>
        </form>
        <div className="error-container">
          {error && (
            <Typography
              variant="body2"
              style={{
                color: "red",
                marginBottom: "10px",
                height: "100%",
              }}
            >
              {`  Task should be between 1 to  ${maxCharacterLimit} characters `}
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskInput;
