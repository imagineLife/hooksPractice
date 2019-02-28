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




*/

export default function FirstAppHooks(){

  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)

  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
        <li>React version: {React.version}</li>
      </ul>
    </section>
  );
}