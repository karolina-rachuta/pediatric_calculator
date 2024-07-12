import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/AddChild/AddChild";
import Home from "./components/Home/Home";
import SearchMeds from "./components/SearchMeds/SearchMeds";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/addChild" element={<AddChild />}/>
        <Route path="/searchMeds" element={<SearchMeds />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
