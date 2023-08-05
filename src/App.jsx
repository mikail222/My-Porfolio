import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import Portfolio from "./Component/Portfolio";
import Route_components from "./Component/Route_components";
import Services from "./Component/Services";
import Mobile_Nav from "./Component/Mobile_Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Mobile_Nav />
      <Route_components />
    </div>
  );
}

export default App;
