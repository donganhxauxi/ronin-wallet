import "./css/index.css";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
    </Switch>
  );
}

export default App;
