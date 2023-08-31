import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const user= 'Jahanvi';
  return (
    <div className="app">
      <Router>
        {
          !user?(<LoginScreen/>):( <Routes>
            <Route path="/" element={<HomeScreen/>}>
            </Route>
          </Routes>)
        }
       
      </Router>
      {/* <HomeScreen/> */}
    </div>
  );
}

export default App;
