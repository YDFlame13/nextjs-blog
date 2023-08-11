import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext([]);
const TasksDispatchContext = createContext(null);

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'create': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }]
    }
    case 'delete': {
      return tasks.filter(task => task.id !== action.id);
    }
    case 'update': {
      return tasks.map(task => {
        if(task.id === action.id){
          return action.task;
        }else{
          return task;
        }
      })
    }
  }
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    {id: 0, text: "aaaaaaaaaaa", done: false}
  ]);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks(){
  return useContext(TasksContext);
}

export function useTasksDispatch(){
  return useContext(TasksDispatchContext);
}