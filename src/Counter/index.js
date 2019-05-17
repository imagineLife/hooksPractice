import React, { useState } from 'react'

function Counter(){
	const [count, setCount] = useState(0)
	const inc = () => setCount(count + 1)
	return <button 
		className="test-button" 
		onClick={inc}>{count}</button>
}

export default Counter