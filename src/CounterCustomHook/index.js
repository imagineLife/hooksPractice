import React, { useState } from 'react'
import {useCounter, useCounterComplex, useCounterMoreComplex} from '../CountHook'

function Counter(){
	//simple api
	// const {count, inc} = useCounter()

	//complex api, takes initial state value!
	// const {count, inc} = useCounterComplex(3)

	//MORE complex api, takes initial state && increment value!
	const {count, inc} = useCounterMoreComplex(3, 2)

	return <button 
		className="test-button" 
		onClick={inc}>{count}</button>
}

export default Counter