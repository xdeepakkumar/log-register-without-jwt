import './App.css';
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register/register";
import Login from "./components/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login setLoginUser = {setLoginUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
