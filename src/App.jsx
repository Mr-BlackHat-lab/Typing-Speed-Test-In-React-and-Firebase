import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Login/>
    </>
  );
}

export default App;
