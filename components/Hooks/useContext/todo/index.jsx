import { useTheme } from "../theme"
import { TasksProvider } from "../tasksContext"
import CreateTask from "../createTask"
import Tasks from "../Tasks"

import styles from "./index.module.scss"

export default function Todo() {
  const [theme, setTheme] = useTheme();
  
  return (
    <div className={[styles.container, theme].join(' ')}>
      <h1 className={theme}>To do list</h1>
      <span 
        className={[styles.changeTheme, theme].join(' ')}
        onClick={()=>{theme === "light"? setTheme("dark") : setTheme("light")}}
      >{theme}</span>
      <TasksProvider>
        <CreateTask/>
        <Tasks/>
      </TasksProvider>
    </div>
  )
}