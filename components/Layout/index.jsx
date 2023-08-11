import { useRouter } from "next/router";

import Link from "next/link";

import styles from "./index.module.scss";

export default function Layout({ children }){
  const router = useRouter();
  return (
    <>
      {children}
      {router.route!=='/'&&<Link href="/" className={styles.bth}>{'Back to home -->'}</Link>}
    </>
  )
}