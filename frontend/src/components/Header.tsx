import React, { ReactElement } from 'react'
import styles from "../Main.module.css";

interface Props {
  transClick: (e: any) => void;
  dataClick: (e: any) => void;
  budgClick: (e: any) => void;
}

export default function Header({transClick, dataClick, budgClick}: Props): ReactElement {
  return (
    <ul className={styles.headerList}>
      <li className={styles.headerLogo}><a>Financial Freedom</a></li>
      <li className={styles.headerItem}><a onClick={budgClick}>Budget</a></li>
      <li className={styles.headerItem}><a onClick={dataClick}>Data</a></li>
      <li className={styles.headerItem}><a onClick={transClick}>Transactions</a></li>
    </ul>
  )
}
