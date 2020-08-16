import React from 'react'

const Footer = () => {

    const style = {
        position: 'fixed',
        bottom: 5,
        right: 10
    }

    return (
      <footer style={style}>
        <i>Hangman, build by Jeremy Lavigne, august 2020</i>
      </footer>
    )
}


export default Footer