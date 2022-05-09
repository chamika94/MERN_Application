import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from "./redux/features/authSlice";
import AddEditTour from "./pages/AddEditTour";
import SingleTour from './pages/SingleTour';



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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/addTour" element={<AddEditTour/>}/>   
              <Route path="/tour/:id" element={<SingleTour/>}/>             
            </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
