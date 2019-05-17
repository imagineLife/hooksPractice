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
  return(
  	<div style={{textAlign: 'center'}}>
  	  <label style={{
  	  	fontSize: '3em',
  	  	display: 'block'
  	  }}>
  	  	0ms
  	  </label>
  	  <button style={{buttonStyle}}>Start</button>
  	  <button style={{buttonStyle}}>Clear</button>
  	</div>
  )
}