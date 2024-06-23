import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navabar from "./componets/navbar/navbar"
import Home from "./componets/home/home"

const App = () => {
  return (

    <Router>
      <div className="app">
        <Navabar/>
        <Routes >
          <Route path="/" exact Component={Home} />
        </Routes>

      </div>
    </Router>

  )
}

export default App
