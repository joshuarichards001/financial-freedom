import React, { ReactElement, useState } from "react";
import styles from "../Main.module.css";
import GoogleLogin from 'react-google-login';

interface Props {
  loading: boolean;
  onLoginClick: (userName: string, password: string) => void | undefined;
  onGoogleClick: (response: any) => Promise<void>
  onRegisterClick: (
    email: string,
    userName: string,
    password: string
  ) => void | undefined;
}

export default function LoginForm({
  onLoginClick,
  onRegisterClick,
  onGoogleClick,
  loading,
}: Props): ReactElement {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <nav>
        <li className={styles.headerLogo}>Financial Freedom</li>
      </nav>
      <div className={styles.content}>
        <form className={styles.loginForm}>
          {showRegister ? (
            <h1 style={{ paddingBottom: "20px" }}>Register</h1>
          ) : (
            <h1 style={{ paddingBottom: "20px" }}>Login</h1>
          )}
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
              if (
                (!showRegister || email.length,
                userName.length,
                password.length === 0)
              ) {
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
          <GoogleLogin
            clientId="551797952328-07qc03g60octqej7u462de4vbgtfkbm9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onGoogleClick}
            onFailure={onGoogleClick}
          />
          {loading ? (
            <p style={{ marginTop: "10px" }}>Content Is Loading, this may take a minute...</p>
          ) : null}
        </form>
        <div className={styles.loginForm} style={{width: "300px"}}>
          <h1>About</h1>
          <p style={{ marginTop: "20px" }}>
            A budgeting app that was built to develop my skills in 
            full-stack web development. It is built using:
          </p>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <div style={{ marginRight: "50px"}}>
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>Netlify</li>
            </div>
            <div>
              <li>Python</li>
              <li>Django</li>
              <li>SQLite</li>
              <li>Heroku</li>
            </div>
          </div>
          <p style={{ marginTop: "20px" }}>
            You can either log in as a guest, register yourself, login with google, or use some existing dummy users like:
          </p>
          <table style={{ marginTop: "20px", width: "100px" }}>   
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>user1</td>
                <td>pass</td>
              </tr>
              <tr>
                <td>user2</td>
                <td>pass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
