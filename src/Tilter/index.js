import './index.css'
import React, {useRef, useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'

/*
  to use tilt, we initialize vanillaTilt on a dom node.
  we need to give react access to the dom node
  && then initialize tile on it

*/

function Tilt(props) {
  
  //declare ref const
  const tiltRef = useRef()
  
  //c-d-m listener
  useEffect(() => {

    //init vanillaTilt
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    //s-w-unmount cleanup
    return () => tiltRef.current.vanillaTilt.destroy()

    //no depenendecies in this effect
  }, [])

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

function Tilter() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}

export default Tilter
