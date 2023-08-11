import Link from "next/link";

import menu from "../constant/menu";
// import { getMenu } from "../lib/menu";

// export async function getStaticProps() {
//   const menu = getMenu();
//   return {
//     props: {
//       menu
//     }
//   }
// }

export default function Home(){
  const renderMenu = (menu, level) => {
    const TAB = 20;
    const style = {
      marginLeft: (TAB*level).toString() + 'px',
    }
    return (
      <>
        {menu.map(item=>(
          <div key={item.id}>
            <Link href={item.to} style={style}>{item.text}</Link>
            {item.children&&renderMenu(item.children, level+1)}
          </div>
        ))}
      </>
    )
  }
  
  return (
    <>
      {renderMenu(menu,0)}
    </>
  )
}