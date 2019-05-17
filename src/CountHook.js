import react, { useState } from 'react'

//custom 'simple' hook
export function useCounter(){
	const [count, setCount] = useState(0)
	const inc = () => setCount(count + 1)
	return {count, inc}
}

//more complex hook
export function useCounterComplex(initialState){
	const [count, setCount] = useState(initialState)
	const inc = () => setCount(count + 1)
	return {count, inc}
}

//more complex hook
export function useCounterMoreComplex(initialState, incVal){
	const [count, setCount] = useState(initialState)
	const inc = () => setCount(count + incVal)
	return {count, inc}
}