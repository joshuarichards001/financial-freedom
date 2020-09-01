import React, { ReactElement, useState, useContext } from 'react'
import { UserContext } from "./App";
import styles from "../Main.module.css";
import Header from './Header';

interface Props {
  
}

export default function LoginForm({}: Props): ReactElement {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const user = useContext(UserContext);

  const [showFailure, setShowFailure] = useState(false);

  const onLoginClick = () => {
    if (userName === "user" && password === "password") {
      user.setIsLoggedIn(true);
      setShowFailure(true);
    } else {
      setShowFailure(true);
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li className={styles.headerLogo}><a>Financial Freedom</a></li>
          <li className={styles.headerItem}><a>Budget</a></li>
          <li className={styles.headerItem}><a>Data</a></li>
          <li className={styles.headerItem}><a>Transactions</a></li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.loginForm}>
          <h1 style={{paddingBottom: "20px"}}>Login</h1>
          <label>User Name</label>
          <input
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
            className={styles.inputStyle}
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className={styles.inputStyle}
            style={{marginBottom: "40px"}}
            type="password"
          />
          <button
            onClick={onLoginClick}
            className={styles.buttonStyle}
            style={{backgroundColor: "#aaaaaa"}}
          >
            Login
          </button>
          {showFailure ? <div style={{color: "red"}}>
            <p>No user goes by those details</p>
          </div> : null}
        </div>
      </div>
    </div>
  );
}
