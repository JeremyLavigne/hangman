import React, {useState} from 'react'

const LoseMsg = ({language, score, tenthScore, saveScore}) => {

    const [ playerName, setPlayerName ] = useState('')

    console.log(score, tenthScore)
    return (
        <div>
            <div className="is-size-3 has-text-centered has-text-danger mt-3 mb-3">
                {language.gamePage.loseMsg}
            </div>
            <div className="is-size-4 has-text-centered">
                {score > tenthScore ? language.gamePage.recordScore : language.gamePage.noRecord}
                <br />
                {score > tenthScore ? <input value={playerName} onChange={({target}) => setPlayerName(target.value)} /> : null} <button onClick={() => saveScore(playerName)}>{language.gamePage.recordName}</button>
            </div>
        </div>
    )
}

export default LoseMsg