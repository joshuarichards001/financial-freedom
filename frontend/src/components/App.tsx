import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import LoginForm from './LoginForm';
import { loginUser, registerUser } from "../actions/userAPI";

interface IUserManager {
  setIsLoggedIn: Function;
}
const user: IUserManager = {
  setIsLoggedIn: () => {}
};
export const UserContext = React.createContext<IUserManager>(user);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    console.log(userToken)
    if (userToken) {
      setToken(userToken)
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginClick = (userName, password) => {
    loginUser(userName, password)
    .then(({ data }: string | any) => {
      setToken(data.auth_token);
      localStorage.setItem('user', data.auth_token)
      user.setIsLoggedIn(true);
    })
    .catch((err: Error) => {
      console.log(err)
      user.setIsLoggedIn(false);
    });
  };

  const onRegisterClick = (email, userName, password) => {
    registerUser(email, userName, password).
    then(() => {
      loginUser(userName, password)
    .then(({ data }: string | any) => {
      setToken(data.auth_token);
      localStorage.setItem('user', data.auth_token)
      user.setIsLoggedIn(true);
    })
    .catch((err: Error) => {
      console.log(err)
      user.setIsLoggedIn(false);
    });
    })
  };

  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={() => (
          isLoggedIn ? <Home token={token}/> : <LoginForm onLoginClick={onLoginClick} onRegisterClick={onRegisterClick}/>
        )}/>
        <Route path="/login" component={() => (<LoginForm onLoginClick={onLoginClick} onRegisterClick={onRegisterClick}/>)}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
