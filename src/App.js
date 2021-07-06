import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Input from "./components/Input";
import Iframe from "./components/Iframe";
import { getMovie } from "./services/apiCalls";
import SingleMovie from "./components/SingleMovie";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <Dashboard />
      {/* {movieData && <Iframe title={title} />} */}
    </div>
  );
}

export default App;
