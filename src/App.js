import "./App.css";
import "material-icons/iconfont/material-icons.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RightBoard from "./components/rightBoard/RightBoard";
import AppRouter from "./router/AppRouter";
import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./context";

import { useContext } from "react";
import LogIn from "./components/LogIn/LogIn";
import UpBoard from "./components/upboard/UpBoard";
function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
        }}
      >
        {isAuth ? (
          <div className="container">
            <Router>
              <Sidebar />
              <div className="">
                <UpBoard />
                <AppRouter />
              </div>

              {/* <RightBoard/> */}
            </Router>
          </div>
        ) : (
          <Router>
            <Routes>
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/*" element={<LogIn />} />
            </Routes>
          </Router>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
