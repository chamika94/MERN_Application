import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from "./redux/features/authSlice";



function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setUser(user));
  },[])

  return (
    <BrowserRouter>
    <div className="App">
           <ToastContainer/>
           <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
