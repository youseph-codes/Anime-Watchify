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
                <Route path="/anime/list" exact component={AnimeList} />
                <Route path="/anime/create" exact component={AnimeInsert} />
                <Route path="anime/update/:id" exact component={AnimeUpdate} />
            </Routes>
        </Router>
    )
}

export default App