import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './component/Navbar'
import Lottery from './component/Lottery'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Lottery/>
        <Routes>
          {/* <Route path="/" exact element={<Navbar/>}/> */}

        </Routes>
    </Router>
    </>
  )
}

export default App
