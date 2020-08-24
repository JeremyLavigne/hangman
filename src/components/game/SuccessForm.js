import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialize, setEasyMode } from '../../reducers/wordReducer'



// ---------------------------------------------------------------------------------
const SuccessForm = () => {

    const dispatch = useDispatch()
    const easyMode = useSelector(state => state.gameMode.easyMode)
    const language = useSelector(state => state.gameMode.language)
    const word = useSelector(state => state.word.word)

    const nextWordIsAsked = () => {
        dispatch(initialize(language.name))
        dispatch(setEasyMode(easyMode))
      }

    return (
        <div className="is-size-2 has-text-centered has-text-success">

            {language.gamePage.winMsg}

            <br />

            <button className="button is-success mt-1 mb-3" onClick={nextWordIsAsked}>
                {language.gamePage.nextWord}
            </button>

            <div className="is-size-6 mt-5">
                <a href={language.gamePage.googleSearch + word.toLowerCase()} rel="noopener noreferrer" target="_blank" >{language.gamePage.dontUnderstand}</a>
            </div>
            
        </div>
    )
}

export default SuccessForm