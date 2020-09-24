import React, { ReactElement, useState } from "react";
import styles from "./Main.module.css";
import GoogleLogin from "react-google-login";

interface Props {
  loading: boolean;
  onLoginClick: (userName: string, password: string) => void | undefined;
  onGoogleClick: (response: any) => Promise<void>;
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
      <div className={styles.headerContainer}>
        <nav>
          <li className={styles.headerLogo}>Financial Freedom</li>
        </nav>
      </div>
      <div className={styles.contentContainer}>
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
          <label className={styles.labelStyle}>User Name</label>
          <input
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
            className={styles.inputStyle}
          />
          <label className={styles.labelStyle}>Password</label>
          <input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className={styles.inputStyle}
            style={{ marginBottom: "40px" }}
            type="password"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              style={{ backgroundColor: "#e0e0e0", flex: 1 }}
            >
              Login
            </button>
            <button
              className={styles.buttonStyle}
              style={{ backgroundColor: "#e0e0e0", flex: 1 }}
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
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className={styles.buttonStyle}
              style={{ backgroundColor: "#e0e0e0" }}
              onClick={(e) => {
                e.preventDefault();
                onLoginClick("testUser", "testUserPass");
              }}
            >
              Login As Guest
            </button>
            <GoogleLogin
              clientId="551797952328-07qc03g60octqej7u462de4vbgtfkbm9.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={styles.buttonStyle}
                  style={{ backgroundColor: "#e0e0e0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="26"
                    viewBox="0 0 24 24"
                    style={{ marginRight: "10px", marginBottom: "1px" }}
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
              )}
              buttonText="Login with Google"
              onSuccess={onGoogleClick}
              onFailure={onGoogleClick}
            />
          </div>
          {loading ? (
            <p style={{ marginTop: "10px", marginLeft: '6px' }}>
              Content Is Loading, this may take a minute...
            </p>
          ) : null}
        </form>
        <div className={styles.loginForm} style={{ width: "300px" }}>
          <h1>Info</h1>
          <p style={{ marginTop: "20px" }}>
            You can either log in as a guest, register yourself, login with
            google, or use some existing dummy users like:
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
