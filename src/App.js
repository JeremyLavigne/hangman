import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Scores from './components/Scores'
import Rules from './components/Rules'
import NewGame from './components/NewGame'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


const App = () => {

  return (
    <Router>

      <NavBar />

      <Switch>

        <Route path="/scores">
          <Scores />
        </Route>

        <Route path="/rules">
          <Rules />
        </Route>

        <Route path="/">
          <NewGame />
        </Route>

      </Switch>

      <Footer />

    </Router>
  )
}
export default App
