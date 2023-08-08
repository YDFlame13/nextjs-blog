import { memo } from "react";

function Info({name,cAdd}){
  console.log("re-rendered");
  return (
    <>
      <div> Hello {name}</div>
      <button onClick={cAdd}>点我</button>
    </>
    
  )
}

export default memo(Info);