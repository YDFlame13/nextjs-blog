import { ThemeProvider } from "../../../components/Hooks/useContext/theme"
import Todo from "../../../components/Hooks/useContext/todo";

export default function CuseContext(){
  return (
    <ThemeProvider>
      <Todo/>
    </ThemeProvider>
  )
}