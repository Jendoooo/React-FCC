import React from "react"
import TODO from "./components/todoitem"
import "./styles.css"
import todoData from "./components/todojsonData"

function App(){
  const todoComponents =todoData.map(TODOindexes=>{
    return (<TODO key={TODOindexes.id} item={TODOindexes} />)})
   
  return (
    <div >
      <div className="jendo">MY TODO LIST</div>
      <div className="todo-list">{todoComponents}</div>
  
    </div>
  )
    
}

export default App
