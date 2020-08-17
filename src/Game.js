import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import NewGame from './NewGame'


const Game = ({language, firstVisit}) => {

  if (firstVisit) {
    return (
      <NewGame />
    )
  }
  
  return (
    <Router>

      <NavBar language={language}/> 

      <Switch>

        <Route path="/scores">
          <Scores />
        </Route>

        <Route path="/rules">
          <Rules />
        </Route>

        <Route path="/">
          Current Game
        </Route>

      </Switch>

      <Footer language={language}/> 

    </Router>
  )
}
export default Game
