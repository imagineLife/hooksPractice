export function reducer(state, action){
  switch(action.type){
    case 'SET_TIME_LAPSE':
      return {
        ...state,
        timeLapse: action.now - action.startTime
      }

    case "TOGGLE_RUNNING":
      return {
        ...state,
        running: !state.running
      }  
    
    case "CLEAR_STOPWATCH":
      return {
        ...state,
        timeLapse: 0,
        running: false
      }

    default:
      return state;
  }
}