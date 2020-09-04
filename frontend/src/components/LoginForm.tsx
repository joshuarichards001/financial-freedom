import React, { ReactElement, useState, useContext } from "react";
import { UserContext } from "./App";
import styles from "../Main.module.css";
import Header from "./Header";

interface Props {
  onLoginClick: (userName: string, password: string) => void | undefined;
  onRegisterClick: (
    email: string,
    userName: string,
    password: string
  ) => void | undefined;
}

export default function LoginForm({
  onLoginClick,
  onRegisterClick,
}: Props): ReactElement {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li className={styles.headerLogo}>
            <a>Financial Freedom</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <form className={styles.loginForm}>
          {showRegister ? (
            <h1 style={{ paddingBottom: "20px" }}>Register</h1>
          ) : (
            <h1 style={{ paddingBottom: "20px" }}>Login</h1>
          )}
          <p style={{ color: "#aaaaaa", marginBottom: "30px" }}>
            Isn't super secure so just use some dummy info
          </p>
          {showRegister ? <label>Email</label> : null}
          {showRegister ? (
            <input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              className={styles.inputStyle}
            />
          ) : null}
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
            style={{ marginBottom: "40px" }}
            type="password"
          />
          <button
            onClick={(e) => {
              if (!showRegister) {
                e.preventDefault();
                onLoginClick(userName, password);
              } else {
                setShowRegister(false);
              }
            }}
            className={styles.buttonStyle}
            style={{ backgroundColor: "#aaaaaa" }}
          >
            Login
          </button>
          <button
            className={styles.buttonStyle}
            onClick={(e) => {
              if (!showRegister) {
                e.preventDefault();
                setShowRegister(true);
              } else {
                e.preventDefault();
                onRegisterClick(email, userName, password);
              }
            }}
          >
            Register
          </button>
          <button
            className={styles.buttonStyle}
            style={{ backgroundColor: "#eeeeee" }}
            onClick={(e) => {
              e.preventDefault();
              onLoginClick("testUser", "testUserPass");
            }}
          >
            Login As Guest
          </button>
        </form>
      </div>
    </div>
  );
}
