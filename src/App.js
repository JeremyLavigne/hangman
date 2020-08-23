// Utils
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/header-footer/Footer'
import NavBar from './components/header-footer/NavBar'
import Game from './components/game/Game'
import NewGame from './components/NewGame'



// ---------------------------------------------------------------------------------
const App = () => {

  return (
    <Router>

      <Switch>

        <Route path="/scores">
          <NavBar />
          <Scores />
          <Footer />
        </Route>

        <Route path="/rules">
          <NavBar />
          <Rules />
          <Footer />
        </Route>

        <Route path="/game">
          <NavBar />
          <Game />
          <Footer />
        </Route>

        <Route path="/">
          <NewGame/>
        </Route>

      </Switch>

    </Router>
  )
}

export default App
