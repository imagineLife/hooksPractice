import React, { useState } from "react";
import './main.css'

/*
convertin to hooks
  1. replace class with fn
  2. remove constructor
  3. useState hook to maintain state

    evolution of useState hook
    const state = useState("")
    const text = state[0]
    const setText = state[1]

    becomes...
    const [text, setText] = useState("")

    becomes...
    const [state, setState] = useState({
      text: "",
      checked: false
    })

      NOTE HERE
      - this useState does not do a shallow merge like the class setState.
      - need to develop a checker, a shallow merge
      - here, also, moved the handleChanges back inline with the

  some handleCheckbox approaches 
  1. const handleCheck = e => setChecked(e.target.checked)
  2. const handleCheck = e => setChecked(!checked)
  3. const hanldeCheck = e => setChecked(prevCh => !prevCh)



*/

export default function FirstAppHooks(){

  const [state, setState] = useState({
    text: "",
    checked: false
  })
  // const [text, setText] = useState("")
  // const [checked, setChecked] = useState(false)
    const mergeState = newState => 
    setState(prevState => ({
      ...prevState,
      ...newState
    }))
  const handleChange = e => mergeState({text: e.target.value})
  const handleCheck = e => mergeState({checked: !state.checked})

  return (
    <section>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        checked={state.checked}
        onChange={handleCheck}
      />
      <ul>
        <li>{state.text}</li>
        <li>{state.checked.toString()}</li>
      </ul>
    </section>
  );
}