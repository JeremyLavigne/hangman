import { english, french, swedish } from '../languages/languages'

const initialState = {
    language : english,
    easyMode : false
}

export const chooseLanguage = (languageName) => {
    let newLanguage

    switch (languageName) {
        case 'english' :
            newLanguage = english
            break
        case 'french' :
            newLanguage = french
            break
        case 'swedish' :
            newLanguage = swedish
            break
        default :
            newLanguage = english
    }

    return {
        type : 'CHOOSE_LANGUAGE',
        data : {
            language : newLanguage
        }
    }
}

export const changeMode = () => {
    console.log('changing mode')
    return {
        type : 'CHANGE_MODE'
    }
}

const gameModeReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    switch (action.type) {
        case 'CHOOSE_LANGUAGE' :
            return {
                language : action.data.language,
                easyMode : state.easyMode
            }
        case 'CHANGE_MODE' :
            return {
                language : state.language,
                easyMode : !state.easyMode
            }
      default: return state
    }
}
  
export default gameModeReducer