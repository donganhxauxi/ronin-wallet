import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Transaction from "./pages/Transaction";
function App() {
  const isLoggedIn = useSelector((state) => state.profile.token);

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {isLoggedIn && (
        <Route path="/user-profile/:email" exact>
          <UserProfile />
        </Route>
      )}

      {isLoggedIn && (
        <Route path={`/user-profile/:email/:transactionType`}>
          <Transaction />
        </Route>
      )}

      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
