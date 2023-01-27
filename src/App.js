import "./App.css"
import 'material-icons/iconfont/material-icons.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import RightBoard from "./components/rightBoard/RightBoard";
function App() {

  

  return (
    
    <div className="App">
      <div className="container">

    <Router>
        <Sidebar />
        <Dashboard/>
        <RightBoard/>
        </Router>

      </div>
    
    </div>
  );
}

export default App;
