import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Fight from "./pages/Fight"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/fight/:id" element={<Fight />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
