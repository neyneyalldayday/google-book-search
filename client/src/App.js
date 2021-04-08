import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Title from "./components/title"
import "./icons"
import {  Route, Switch } from "react-router-dom";

function App() {


  return (
   
    <>   
    <Navbar />
    <Title />    
    <Switch>
    <Route  exact component={Home}/>
    <Route path="/search" component={Search}/>
    <Route path="/saved" component={Saved}/>
     </Switch>    
     </>
    
  );
}

export default App;
