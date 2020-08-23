import randomWord from '../dictionaries/randomWord'

const initialState = {
    word : '',
    displayedWord : '',
    discoveredLetters : [],
    missedLetters : [],
    wordIsDiscoverBeforeEnd : false,
    wordIsNotDiscoverAtEnd : false,
    count : 7
}

export const initialize = (languageName) => {

    return {
      type: 'INITIALIZE',
      data: {
          word : randomWord(languageName).toUpperCase()
      }
    }
}

export const setEasyMode = (easyMode) => {

    if (easyMode){
        return {
            type: 'EASY_MODE'
        }
    } return {
        type : 'DO_NOTHING'
    }
}


export const goodLetterIsClicked = (letter) => {

    return {
      type: 'GOOD_LETTER',
      data: {
          letter : letter
      }
    }
}

export const badLetterIsClicked = (letter) => {

    return {
      type: 'BAD_LETTER',
      data: {
          letter : letter
      }
    }
}

export const checkIfWordDiscover = () => {

    return {
      type: 'CHECK_WIN'
    }
}

const cancel5letters = (word) => {
    const missedLetters = []
    const splitWord = word.split('')
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    let i = 0

    while( i < 5) {
        const letterIndex = Math.floor(Math.random() * Math.floor(alphabet.length))
        if (!(splitWord.includes(alphabet[letterIndex]))) {
            missedLetters.push(alphabet[letterIndex])
            i ++
        }
    }
    return missedLetters

}

const wordReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
  
    switch (action.type) {
        case 'DO_NOTHING' :
            return state
        case 'INITIALIZE' :
            return {
                word : action.data.word,
                displayedWord : action.data.word.split('').map(char => '_ '),
                discoveredLetters : [],
                missedLetters : [],
                wordIsDiscoverBeforeEnd : false,
                wordIsNotDiscoverAtEnd : false,
                count : 7
            }
        case 'EASY_MODE' :
            return {
                word : state.word,
                displayedWord : state.word.split('').map(l => (l === state.word.split('')[0]) ? l : '_ '),
                discoveredLetters : [state.word.split('')[0]],
                missedLetters : cancel5letters(state.word),
                wordIsDiscoverBeforeEnd : false,
                wordIsNotDiscoverAtEnd : false,
                count : 7
            }
        case 'GOOD_LETTER' :
            return {
                word : state.word,
                displayedWord : state.word.split('').map(l => (state.discoveredLetters.includes(l) || l === action.data.letter) ? l : '_ '),
                discoveredLetters : state.discoveredLetters.concat(action.data.letter),
                missedLetters : state.missedLetters,
                wordIsDiscoverBeforeEnd : state.wordIsDiscoverBeforeEnd,
                wordIsNotDiscoverAtEnd : state.wordIsNotDiscoverAtEnd,
                count : state.count
            }
        case 'BAD_LETTER' :
            return {
                word : state.word,
                displayedWord : state.displayedWord,
                discoveredLetters : state.discoveredLetters,
                missedLetters : state.missedLetters.concat(action.data.letter),
                wordIsDiscoverBeforeEnd : state.wordIsDiscoverBeforeEnd,
                wordIsNotDiscoverAtEnd : (state.count === 1) ? true : state.wordIsNotDiscoverAtEnd,
                count : state.count - 1
            }
        case 'CHECK_WIN' :
            return {
                word : state.word,
                displayedWord : state.displayedWord,
                discoveredLetters : state.discoveredLetters,
                missedLetters : state.missedLetters,
                wordIsDiscoverBeforeEnd : (!state.displayedWord.includes('_ ')) ? true : state.wordIsDiscoverBeforeEnd,
                wordIsNotDiscoverAtEnd : state.wordIsNotDiscoverAtEnd,
                count : state.count
            }
      default: return state
    }
}
  
export default wordReducer