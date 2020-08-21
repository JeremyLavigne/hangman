const initialState = {
    score : 0
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

const scoreReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
      case 'INCREASE_SCORE' :
        return {
            score : state.score + action.data.score
        }
      default: return state
    }
}
  
export default scoreReducer