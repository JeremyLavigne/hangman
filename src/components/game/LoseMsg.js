import React from 'react'

const LoseMsg = ({language, score, tenthScore}) => {

    console.log(score, tenthScore)
    return (
        <div>
            <div className="is-size-3 has-text-centered has-text-danger mt-3 mb-3">
                {language.gamePage.loseMsg}
            </div>
            <div className="is-size-4 has-text-centered">
                {score > tenthScore ? language.gamePage.recordScore : language.gamePage.noRecord}
                {score > tenthScore ? <input /> : null}
            </div>
        </div>
    )
}

export default LoseMsg