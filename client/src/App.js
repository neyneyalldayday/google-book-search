import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Title from "./components/title"
import "./icons"
import {  Route, Switch, } from "react-router-dom";

function App() {
  return (
   
    <>
    
    <Navbar />
    <Title />
    <div className="container mt-2" style={{ marginTop: 40 }}>
    <Switch>
    <Route  exact path="/">
      <Home />
      </Route>
      <Route path="/search">
      <Search />
      </Route>
      <Route path="/saved">
      <Saved />
      </Route>
    </Switch>    
    </div>
     </>
    
  );
}

export default App;
