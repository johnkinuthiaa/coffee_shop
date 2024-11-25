

import './App.css'


import {Route, Routes} from "react-router-dom";
import Card from "./components/Card.jsx";
import HomePage from "./pages/HomePage.jsx";
import Home from "./pages/Home.jsx";


function App() {

  return (
    <>
        <Routes>
            <Route path={"/home"} element={< Home/>}/>
            <Route path={"/"} element={< HomePage/>}/>
            <Route path={"/card"} element={< Card/>}/>
        </Routes>
    </>
  )
}

export default App
