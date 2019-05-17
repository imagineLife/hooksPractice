import React, { useState } from 'react'
import {useCounter, useCounterComplex} from '../CountHook'

function Counter(){
	//simple api
	// const {count, inc} = useCounter()

	//complex api, takes initial state value!
	const {count, inc} = useCounterComplex(3)

	return <button 
		className="test-button" 
		onClick={inc}>{count}</button>
}

export default Counter