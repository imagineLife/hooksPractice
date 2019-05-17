import React, { useState } from 'react'
import {useCounter} from '../CountHook'

function Counter(){
	const {count, inc} = useCounter()
	return <button 
		className="test-button" 
		onClick={inc}>{count}</button>
}

export default Counter