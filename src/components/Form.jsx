import React from "react"

export default function Form(props) {
  return ( 
  <div className="form">
  <input className = "to-do-input" onChange = {props.findCurrentInputFunc} type="text" />
  <button onClick = {props.addItemFunc}>
    <span>Add</span>
  </button>
</div>
  )
}