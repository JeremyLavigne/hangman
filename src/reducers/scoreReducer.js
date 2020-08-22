const initialState = {
    score : 0,
    bestPlayers : []
}

export const initializeBestPlayers = (bestPlayers) => {
    return {
      type: 'INIT_BEST_PLAYERS',
      data: bestPlayers
    }
}


export const increaseScore = (count) => {
    let score = 0
    switch (count) {
        case 7 : 
            score += 100
            break
        case 6 : 
            score += 50
            break
        case 5 : 
            score += 35
            break
        case 4 : 
            score += 25
            break
        case 3 : 
            score += 15
            break
        case 2 : 
            score += 10
            break
        case 1 : 
            score += 5
            break
        default : 
    }

    return {
      type: 'INCREASE_SCORE',
      data: {
          score : score
      }
    }
}

export const addNewPlayer = (newPlayer) => {
    return {
        type : 'ADD_NEW_PLAYER',
        data : {
            newPlayer : newPlayer
        }
    }
}

export const scoreToZero = () => {
    return {
        type : 'ZERO'
    }
}

const scoreReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
        case 'INCREASE_SCORE' :
            return {
                score : state.score + action.data.score,
                bestPlayers : state.bestPlayers
            }
        case 'ZERO' :
            return {
                score : 0,
                bestPlayers : state.bestPlayers
            }
        case 'INIT_BEST_PLAYERS' :
            return {
                score : state.score,
                bestPlayers : action.data
            }
        case 'ADD_NEW_PLAYER' :
            return {
                score : state.score,
                bestPlayers : state.bestPlayers.concat(action.data.newPlayer).sort(function(score1, score2) {
                    return score2.score - score1.score;
                  }).slice(0,10)
            } 
      default: return state
    }
}
  
export default scoreReducer