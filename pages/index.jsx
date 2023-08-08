import { useCallback, useState } from "react";
import Info from "../components/Info";

export default function Home() {
  const [count, setCount] = useState(100);
  const cAdd = useCallback(() => {
    setCount(count=>count+1);
  },[])
  
  // const cAdd = () => {
  //   setCount(count=>count+1);
  // }
  
  return (
    <div>
      <h1>Home {count}</h1>
      <Info name="张三" cAdd={cAdd}/>
    </div>
  );
}