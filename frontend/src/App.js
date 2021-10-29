import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductScreen from "./screens/ProductScreen";
import Homescreen from "./screens/Homescreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Homescreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
      </Router>
    </div>
  );
}

export default App;
