import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Houses from './pages/Houses'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/houses/:id" element={<Houses />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;