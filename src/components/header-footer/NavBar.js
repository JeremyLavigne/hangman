/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from "react-router-dom"


const NavBar = ({language}) => {

  // Add some code to manage opening/closure of the burger
  const [ activeBurger, setActiveBurger ] = useState(false)

  const burgerIsActive = activeBurger ? 'navbar-menu is-active' : 'navbar-menu'

  const clickOnBurger = () => {
   if (activeBurger === false) {
       setActiveBurger(true)
    } else {
      setActiveBurger(false)
    }
  }

  const desactiveBurger = () => {
    setActiveBurger(false)
  }

  // Need to know on what page is the player to adapt content of navbar
  // => Must offer possibility to go back to the game if player open "Rules" or "Scores" page
  const [ currentGamePageActive, setCurrentGamePageActive ] = useState(true)

  const currentGamePageIsNotActive = () => {
    setCurrentGamePageActive(false)
  }
  const currentGamePageIsActive = () => {
    setCurrentGamePageActive(true)
  }


  // Dispatch goods function regarding where the player click
  const clickOnNewGame = () => {
    desactiveBurger()
  }
  const clickOnBackToGame = () => {
    desactiveBurger()
    currentGamePageIsActive()
  }
  const clickOnRulesOrScore = () => {
    desactiveBurger()
    currentGamePageIsNotActive()
  }


  return (
   
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        {currentGamePageActive ?
          <Link 
            className="navbar-item has-text-white" 
            onClick={clickOnNewGame}
            to="/">
              {language.nav[0]}
          </Link>
          :
          <Link 
            className="navbar-item has-text-white" 
            onClick={clickOnBackToGame} 
            to="/game">
              {language.nav[3]}
          </Link>
        }

        <a role="button" onClick={clickOnBurger} className="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="navbarMenu" className={burgerIsActive} >

        <Link 
          className="navbar-item" 
          onClick={clickOnRulesOrScore} 
          to="/scores">
            {language.nav[1]}
        </Link>

        <Link 
          className="navbar-item" 
          onClick={clickOnRulesOrScore} 
          to="/rules">
            {language.nav[2]}
        </Link>

      </div>

    </nav>
    )
}

export default NavBar