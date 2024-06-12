import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopup, editTask, setEditTaskId } from "../slices/taskSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditModal = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.taskList);
  const editTaskId = useSelector((state) => state.tasks.editTaskId);
  const showPopup = useSelector((state) => state.tasks.showPopup);

  const taskToEdit = taskList.find((task) => task.id === editTaskId);
  const [newTaskText, setNewTaskText] = useState("");

  const MAX_TASK_LENGTH = 50;
  useEffect(() => {
    if (taskToEdit) {
      setNewTaskText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const handleEditTask = () => {
    dispatch(editTask({ id: editTaskId, text: newTaskText }));
    dispatch(setShowPopup(false));
    dispatch(setEditTaskId(null));
  };

  const handleClose = () => {
    dispatch(setShowPopup(false));
    dispatch(setEditTaskId(null));
  };

  return (
      <Dialog open={showPopup} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            inputProps={{ maxLength: MAX_TASK_LENGTH }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditTask}>Save</Button>
        </DialogActions>
      </Dialog>
  );
};

export default EditModal;
