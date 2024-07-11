import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/AddChild/AddChild";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/addChild" element={<AddChild />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
