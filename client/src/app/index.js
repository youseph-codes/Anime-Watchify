import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import {AnimeList, AnimeInsert, AnimeUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* Adding routes */}
                <Route
                    path="/anime/list" 
                    element={<AnimeList />} 
                />
                <Route
                    path="/anime/create"
                    element={<AnimeInsert />} 
                />
                <Route 
                    path="anime/update/:id" 
                    element={<AnimeUpdate />} 
                />
            </Routes>
        </Router>
    )
}

export default App