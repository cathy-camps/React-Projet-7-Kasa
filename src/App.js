import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Property from './pages/Property'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/properties/:id" element={<Property />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;