
import React from "react";


import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Addtext from "./components/pages/Addtext";
import Navbar from "./components/layout/Navbar";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from "./components/pages/Team";
import Logout from "./components/pages/Logout";
import Task from "./components/pages/Task";
import Profile from "./components/pages/Profile";

function App() {
  return (
<Router>
    <div className="App">
    <Navbar/>

<div align="center"> <h1> <b > Collaborative Task Management App</b></h1>  </div>

     

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/addtext" element={<Addtext />} />
<Route path="/team" element={<Team />} />
<Route path="/logout" element={<Logout />} />
<Route path="/task" element={<Task />} />
<Route path="/profile" element={<Profile />} />




          
          </Routes>

         
     

    </div>
    </Router>
  );
}

export default App;
