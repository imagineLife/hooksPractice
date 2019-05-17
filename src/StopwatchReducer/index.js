import React from 'react'

const buttonStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200
}

export function StopwatchReducer(){

  //Reducer-ed state
  //incl destructured state as first arr element
  const [{running, lapse}, dispatch] = React.userReducer(reducer, {
    running: false,
    lapse: 0
  })

  const [timeLapse, setTimeLapse] = React.useState(0)
  const [running, setRunning] = React.useState(false)

  //stopwatch setInterval reference,
  //referenced for stopping the stopwatch 
  const intervalRef = React.useRef(null)

  //clean-up the interval on componentUnMount
  React.useEffect(() => {
  	return () => clearInterval(intervalRef.current)
  })
  
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
  			setTimeLapse(Date.now() - startTime)
  		}, 0)
  	}
  	setRunning(!running)
  }

  //click clear
  function handleClearClick(){
  	clearInterval(intervalRef.current)
  	setTimeLapse(0)
  	setRunning(false)
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