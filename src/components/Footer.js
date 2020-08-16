import React from 'react'

const Footer = () => {

    const style = {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }

    return (
      <footer className="has-background-grey-dark has-text-white-ter has-text-right" style={style}>
        <i>Hangman, build by Jeremy Lavigne, august 2020</i>
      </footer>
    )
}


export default Footer