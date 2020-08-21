import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/header-footer/Footer'
import NavBar from './components/header-footer/NavBar'
import Game from './components/game/Game'
import NewGameForm from './components/NewGameForm'

import { english, french, swedish } from './languages/languages'

import scoresService from './services/scores'
import { initialize } from './reducers/wordReducer'


const App = () => {

  const dispatch = useDispatch()

  const score = useSelector(state => state.score.score) // Should be somewhere else

  const newGameIsAsked = (languageName) => {
    dispatch(initialize(languageName))
  }






  const [ language, setLanguage] = useState(english)
  const [ scores, setScores ] = useState([]) // Array with all best scores

  // Get the best scores
  useEffect(() => {
    scoresService
      .getScores(language.name)
      .then(initialScores => {
        setScores(initialScores.sort(function(score1, score2) {
          return score2.score - score1.score;
        }).slice(0,10))
      })

  }, [language])


  // Define the language at the beginning via the NewGame page
  const NewGame = () => {

    const chooseLanguage = (languageName) => {
      switch (languageName) {
        case 'french':
          setLanguage(french)
          break
        case 'swedish':
          setLanguage(swedish)
          break
        case 'english':
          setLanguage(english)
          break
        default: setLanguage(english)
      }
    }

    return (
      <NewGameForm 
        language={language} 
        chooseLanguage={chooseLanguage} 
        bestPlayer={scores[0]} 
        newGameIsAsked={newGameIsAsked}
      />
    )
  }

  const saveScore = (playername) => {
    const newObject = {
      id : (100000 * Math.random()).toFixed(0),
      name : playername,
      score : score
    }
    scoresService
      .addScore(language.name, newObject)
      .then(newObject => {
        setScores(scores.concat(newObject))
      })
  }


  // 4 routes : "Home" page = "New game" page

  return (
    <Router>

      <Switch>

        <Route path="/scores">
          <NavBar language={language} />
          <Scores language={language} scores={scores}/>
          <Footer language={language} />
        </Route>

        <Route path="/rules">
          <NavBar language={language} />
          <Rules language={language} />
          <Footer language={language} />
        </Route>

        <Route path="/game">
          <NavBar language={language} />
          <Game
            language={language}
            scores={scores}
            saveScore={saveScore}
          />
          <Footer language={language} />
        </Route>

        <Route path="/">
          <NewGame />
        </Route>

      </Switch>

    </Router>
  )
}

export default App
