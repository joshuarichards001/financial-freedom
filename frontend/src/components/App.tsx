import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import LoginForm from "../LoginForm";
import { loginUser, registerUser, loginSocialUser } from "../actions/userAPI";

interface IUserManager {
  setIsLoggedIn: Function;
}
const user: IUserManager = {
  setIsLoggedIn: () => {},
};
export const UserContext = React.createContext<IUserManager>(user);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  user.setIsLoggedIn = setIsLoggedIn;

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setToken(userToken);
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginClick = (userName, password) => {
    setLoading(true);
    loginUser(userName, password)
      .then(({ data }: string | any) => {
        setToken(data.auth_token);
        localStorage.setItem("user", data.auth_token);
        user.setIsLoggedIn(true);
      })
      .catch((err: Error) => {
        setLoading(false);
        console.log(err);
        user.setIsLoggedIn(false);
      });
  };

  const onGoogleClick = async (response) => {
    setLoading(true);
    console.log(response)
    loginSocialUser(response.accessToken)
      .then(({ data }: string | any) => {
        console.log(data.key)
        setToken(data.key);
        localStorage.setItem("user", data.key);
        user.setIsLoggedIn(true);
      })
      .catch((err: Error) => {
        setLoading(false);
        console.log(err);
        user.setIsLoggedIn(false);
      });
  };

  const onRegisterClick = (email, userName, password) => {
    setLoading(true);
    registerUser(email, userName, password)
      .then(() => {
        loginUser(userName, password)
          .then(({ data }: string | any) => {
            setToken(data.auth_token);
            localStorage.setItem("user", data.auth_token);
            user.setIsLoggedIn(true);
          })
          .catch((err: Error) => {
            setLoading(false);
            console.log(err);
            user.setIsLoggedIn(false);
          });
      })
      .catch((err: Error) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <BrowserRouter>
        <Route
          path="/"
          exact
          component={() =>
            isLoggedIn ? (
              <Home token={token} />
            ) : (
              <LoginForm
                onLoginClick={onLoginClick}
                onRegisterClick={onRegisterClick}
                loading={loading}
                onGoogleClick={onGoogleClick}
              />
            )
          }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
