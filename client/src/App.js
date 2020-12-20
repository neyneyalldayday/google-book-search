import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Title from "./components/title"

import "./icons"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
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
     </Router>
  );
}

export default App;
