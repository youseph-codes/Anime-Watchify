import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import {AnimeList, AnimeInsert, AnimeUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                {/* Adding routes */}
                <Route path="/anime/list" exact component={AnimeList} />
                <Route path="/anime/create" exact component={AnimeInsert} />
                <Route path="anime/update/:id" exact component={AnimeUpdate} />
            </Switch>
        </Router>
    )
}

export default App