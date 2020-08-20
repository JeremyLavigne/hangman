import React from 'react'

const SecretWord = ({gameIsLost, word, displayedWord}) => {

    return (
    <div className="is-size-2 has-text-centered mt-6">
        {gameIsLost ? word : displayedWord}
    </div>
    )
}

export default SecretWord