import React, { useState, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import LoginForm from './LoginForm';

interface IUserManager {
  setIsLoggedIn: Function;
}
const user: IUserManager = {
  setIsLoggedIn: () => {}
};
export const UserContext = React.createContext<IUserManager>(user);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;

  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={isLoggedIn ? Home : LoginForm}/>
        <Route path="/login" exact component={LoginForm}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
