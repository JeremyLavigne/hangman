// Utils
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import scoresService from './services/scores'

// Components
import Scores from './components/Scores'
import Rules from './components/Rules'
import Footer from './components/header-footer/Footer'
import NavBar from './components/header-footer/NavBar'
import Game from './components/game/Game'
import NewGameForm from './components/NewGameForm'

// Others
import { english, french, swedish } from './languages/languages'
import { initializeBestPlayers } from './reducers/scoreReducer'





// ---------------------------------------------------------------------------------
const App = () => {

  const dispatch = useDispatch()
  const bestPlayers = useSelector(state => state.score.bestPlayers)
  const [language, setLanguage] = useState(english)
  const [easyMode, setEasyMode] = useState(false)

  // EAsy mode is coming here, change db.json to have 2 different list by language
  // Then change the get request in order to have to good list of best player.
  // Easy mode must go down in game component : 
  // -> first letter given and 5 wrong letters given too

  // Get the best scores/players for selected language
  useEffect(() => {
    scoresService
      .getScores(language.name)
      .then(bestPlayers => dispatch(initializeBestPlayers(bestPlayers.sort(function(score1, score2) {
        return score2.score - score1.score;
      }).slice(0,10))))

  }, [dispatch, language])


  // Home page = New game page -> Define the language use for all app
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

    const easyModeChoice = () => {
      setEasyMode(!easyMode)
    }

    return (
      <NewGameForm
        language={language}
        chooseLanguage={chooseLanguage}
        easyModeChoice={easyModeChoice}
        easyMode={easyMode}
        bestPlayer={bestPlayers[0]}
      />
    )
  }



  return (
    <Router>

      <Switch>

        <Route path="/scores">
          <NavBar language={language} />
          <Scores language={language} bestPlayers={bestPlayers} />
          <Footer language={language} />
        </Route>

        <Route path="/rules">
          <NavBar language={language} />
          <Rules language={language} />
          <Footer language={language} />
        </Route>

        <Route path="/game">
          <NavBar language={language} />
          <Game language={language} />
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
