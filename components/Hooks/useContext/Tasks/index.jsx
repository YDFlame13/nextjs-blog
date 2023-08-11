import { useTasks, useTasksDispatch } from "../tasksContext"
import { useTheme } from "../theme";
import styles from "./index.module.scss"

export default function Tasks(){
  const tasks = useTasks();
  const tasksDispatch = useTasksDispatch();
  const [theme] = useTheme();
  
  const onChangeDone = (task) => {
    task.done = !task.done;
    tasksDispatch({
      type: "update",
      task: {...task}
    })
  }
  
  return (
    <ul className={styles.tasks}>
      {tasks.map(task => (
        <li key={task.id} className={styles.task}>
          <input 
            type="checkbox"
            value={task.done}
            onChange={()=>{onChangeDone(task)}}
          />
          <p 
            className={[styles.tt, theme, task.done? styles.done : ''].join(' ')}
          >{task.text}</p>
          <button 
            className={[styles["td-btn"], theme].join(' ')}
            onClick={()=>tasksDispatch({type: 'delete', id: task.id})}
          >删除</button>
        </li>
      ))}
    </ul>
  )
}