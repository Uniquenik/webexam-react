import './App.css';
import React, { useState, useRef } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSpring, useChain, animated } from 'react-spring'
import Modal from './components/Modal';


export default function FormAnimation (props) {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, zIndex,...rest} = useSpring({
    ref: springRef,
    from: { size: '20%', opacity: '0'},
    to: { size: open ? '100%' : '20%',background: 'rgba(0,0,0,0.4)', opacity: open ? '1' : '0' }
  })

  useChain([springRef])

  return (
    <animated.div style={{ ...rest, width: size, height: size , opacity, zIndex: '1000', padding: '25px', cursor: 'pointer', position: open ? 'absolute' : 'relative' }}
    onClick={() => set(open => !open)}>
      <Modal state={props.state} dispatch={props.store.dispatch.bind(props.store)} store={props.store}/>
    </animated.div>
  )
}
