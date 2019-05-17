import React from 'react'

const buttonStyle = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200
}

//STARTING, no state
// export function Stopwatch(){
//   return(
//   	<div style={{textAlign: 'center'}}>
//   	  <label style={{
//   	  	fontSize: '3em',
//   	  	display: 'block'
//   	  }}>
//   	  	0ms
//   	  </label>
//   	  <button style={{buttonStyle}}>Start</button>
//   	  <button style={{buttonStyle}}>Clear</button>
//   	</div>
//   )
// }

export function Stopwatch(){

  //state
  const [timeLapse, setTimeLapse] = React.useState(0)
  const [running, setRunning] = React.useState(false)

  //stopwatch setInterval reference,
  //referenced for stopping the stopwatch 
  const intervalRef = React.useRef(null)

  //clickFn
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

  return(
  	<div style={{textAlign: 'center'}}>
  	  <label style={{
  	  	fontSize: '3em',
  	  	display: 'block'
  	  }}>
  	  	{timeLapse}ms
  	  </label>
  	  <button style={{buttonStyle}} onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
  	  <button style={{buttonStyle}}>Clear</button>
  	</div>
  )
}