import Login from './Components/Login';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import signup from './Components/Signup';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import './App.css';
import Signup from './Components/Signup';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/Profile" component={Profile}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Signup" component={Signup}/>
    </Switch>
  </Router>
  );
}

export default App;
