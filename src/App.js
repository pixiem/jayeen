import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Placeorder from './components/placeorder/Placeorder';





function App() {
  return (
    <div className="App">
    
      <AuthProvider>
        <Router>
        <Switch>
          <Route exact  path="/">
          <Home></Home>
         </Route>
          <Route exact  path="/home">
          <Home></Home>
         </Route>
          <Route exact  path="/login">
          <Login></Login>
         </Route>
          <PrivateRoute  path="/placeorder">
          <Placeorder></Placeorder>
         </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
  
    </div>
  );
}

export default App;
