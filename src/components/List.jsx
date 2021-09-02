import React from "react";

export default function List(props) {
  return (
    <li
    className = "list"
      onClick={() => {

        props.crossOut(props.id)
      
   setTimeout(() => {
     return props.delete(props.id);
   }, 500);
      }}
      style = {props.style}
      id={props.id}>{props.text}</li>
  );
}
