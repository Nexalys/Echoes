import React from 'react'
import "./Button2.css";
export  function BigButton2({text = "Button"}){
  return (
    <div className='big-button-container'>
      <button>{text}</button>
    </div>
  )
}


export  function SmallButton2({text = "Button"}){
  return (
    <div className='small-button-container'>
      <button>{text}</button>
    </div>
  )
}

