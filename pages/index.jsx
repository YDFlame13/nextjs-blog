import { useCallback, useState } from "react";
import Info from "../components/Info";

export default function Home() {
  const [count, setCount] = useState(100);
  const cAdd = useCallback(() => {
    console.log('别点！');
  },[])
  
  // const cAdd = () => {
  //   console.log('别点！');
  // }
  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
      <Info name="张三" cAdd={cAdd}/>
    </div>
  );
}