import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/AddChild/AddChild";
import Home from "./components/Home/Home";
import SearchMeds from "./components/SearchMeds/SearchMeds";
import Dose from "./components/Dose/Dose";


const children = [
  {
    id: 1,
    name: "Anna",
  },

  {
    id: 2,
    name: "Zosia",
  },
  {
    id: 3,
    name: "Grazyna",
  },
];

function App() {
  const [activeChild, setActiveChild] = useState(1);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home children={children} activeChild={activeChild} setActiveChild={setActiveChild}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/addChild" element={<AddChild />}/>
        <Route path="/searchMeds" element={<SearchMeds />}/>
        <Route path="/dose/:id" element={<Dose children={children} activeChild={activeChild} setActiveChild={setActiveChild}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
