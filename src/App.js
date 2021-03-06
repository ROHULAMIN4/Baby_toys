import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/Autprovider";
import ResponsiveDrawer from "./Pages/Dashbord/Dashbord/Dashbord";
import RequiestOrder from "./Pages/Dashbord/RewuiestOrders/RequiestOrder";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Route path="/totallOrder">
              <RequiestOrder></RequiestOrder>
            </Route>
            <PrivateRoute path="/dashbord">
              <ResponsiveDrawer></ResponsiveDrawer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
