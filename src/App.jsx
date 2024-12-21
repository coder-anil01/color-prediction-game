import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './component/Navbar'
import Lottery from './component/Lottery'
import Register from "./pages/Register";
import Recharge from "./pages/Recharge";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Lottery/>}/>
          <Route path="/recharge" exact element={<Recharge/>}/>
          <Route path="/register" exact element={<Register/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
