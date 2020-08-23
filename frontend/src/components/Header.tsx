import React, { ReactElement } from 'react'
import styles from "../Main.module.css";

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <ul className={styles.headerList}>
      <li className={styles.headerLogo}><a href="">Financial Freedom</a></li>
      <li className={styles.headerItem}><a href="">Settings</a></li>
      <li className={styles.headerItem}><a href="">Budget</a></li>
      <li className={styles.headerItem}><a href="">Transactions</a></li>
    </ul>
  )
}
