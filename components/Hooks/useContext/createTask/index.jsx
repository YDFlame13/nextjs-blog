import { useState } from "react";
import { useTasksDispatch } from "../tasksContext"
import { useTheme } from "../theme";

import styles from "./index.module.scss"

export default function CreateTask(){
  const [taskText, setTaskText] = useState("");
  
  const tasksDispatch = useTasksDispatch();
  const [theme] = useTheme();
  
  const onTextChange = (e) => {
    setTaskText(e.target.value);
  }
  
  const createTask = () => {
    tasksDispatch({
      type: "create",
      id: new Date().getTime(),
      text: taskText,
    });
    setTaskText("");
  }
  
  return (
    <>
      <input 
        type="text"
        className={[theme, styles["tt-input"]].join(' ')}
        value={taskText}
        onChange={onTextChange}
      />
      <button 
        onClick={createTask}
        className={theme}
      >确定</button>
    </>
  )
}