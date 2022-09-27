import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import User from './components/ User';
import NoFound from './components/NoFound';
import Delet from './components/Delet';
import Log from './components/Log';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import LogOut from './components/LogOut';
import Private from './components/Private';
import { useEffect } from 'react';


export default function App() {

  // const loaction = window.location;

  // useEffect(() => {

  //   // console.log(loaction);
  //   var log = localStorage.getItem('login')
  //   if (log != 0 && loaction.pathname == "/Log" && loaction.pathname == "/" && loaction.pathname == "") {
  //       window.replace('/User')
  //   }
  // }, [loaction])

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Log />}> </Route>
        <Route path="/" element={<Log />}></Route>
        <Route path="Log" element={<Log />}></Route>
        <Route path="User" element={<Private Components={User} />}></Route>
        <Route path="logout" element={<Private Components={LogOut} />}></Route>
        <Route path="edituser" element={<Private Components={EditUser} />}></Route>
        <Route path='adduser' element={<Private Components={AddUser} />}></Route>
        <Route path='Edit' element={<Private Components={EditUser} />}></Route>
        <Route path='Delet' element={<Private Components={Delet} />}></Route>
        <Route path="*" element={<NoFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
