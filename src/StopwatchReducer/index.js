import React from 'react'

const buttonStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200
}

//reducer fn
function reducer(state, action){
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

export function StopwatchReducer(){
  console.log('HERE');

  //Reducer-ed state
  //incl destructured state as first arr element
  const [{running, timeLapse}, dispatch] = React.useReducer(reducer, {
    running: false,
    timeLapse: 0
  })

  //stopwatch setInterval reference,
  //referenced for stopping the stopwatch 
  const intervalRef = React.useRef(null)

  //clean-up the interval on componentUnMount
  React.useEffect(() => {
  	return () => clearInterval(intervalRef.current)
  }, [])
  
  //click start-stop
  function handleRunClick(){
  	//stop the watch
  	if(running){
  		clearInterval(intervalRef.current)
  	//start the watch
  	}else{
  		//time @ start
  		const startTime = Date.now() - timeLapse;
  		
  		//setInterval to intervalRef val
  		intervalRef.current = setInterval(() => {
  			dispatch({type: 'SET_TIME_LAPSE', now: Date.now(), startTime})
  		}, 0)
  	}
  	dispatch({type: "TOGGLE_RUNNING"})
  }

  //click clear
  function handleClearClick(){
  	clearInterval(intervalRef.current)
  	
    //WAS...
    // setTimeLapse(0)
  	// setRunning(false)

    //NOW...
    dispatch({type:"CLEAR_STOPWATCH"})
  }

  return(
  	<div style={{textAlign: 'center'}}>
  	  <label style={{
  	  	fontSize: '3em',
  	  	display: 'block'
  	  }}>
  	  	{timeLapse}ms
  	  </label>
  	  <button style={{buttonStyle}} onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
  	  <button style={{buttonStyle}} onClick={handleClearClick}>Clear</button>
  	</div>
  )
}