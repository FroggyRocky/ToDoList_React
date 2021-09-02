import React, {useState} from "react";
import List from "./List"
import Form from "./Form"


function App() {
 

 const [currentInput, setCurrentInput] = useState();
  const [itemsArray, setItemsArray] = useState([]);
  const [isCrossedOut, setCrossOut] = useState(false)

  function findCurrentInput(event) {
    const input = event.target.value
    setCurrentInput(input)
  }

  function addItem() {
setItemsArray((prev) => {
  return [...prev, {
    title: currentInput,
    deleted: isCrossedOut
  }]
})
document.querySelector(".to-do-input").value = ""
  }

function deleteOne(id) {

   setItemsArray((prev) => {
    return prev.filter((item, index) => {
    return index !== id
})
})
}
  
function crossOut(id) {

  itemsArray[id].deleted = true;

  setItemsArray((prev)=> {
    return [...prev]
  })
  
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
   <Form 
   addItemFunc = {addItem}
   findCurrentInputFunc = {findCurrentInput}
   />
      <div>
        <ul>
          <li>A Item </li>
          {itemsArray.map((item, index) => {
            return <List 
            text = {item.title}
            key = {index}
            crossOut = {crossOut}
            id = {index}
            delete = {deleteOne}
            style = {{textDecoration: item.deleted ? "line-through" : "none"}}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
