import React from "react"
import TODO from "./components/todoitem"
import "./styles.css"
import todoData from "./components/todojsonData"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todoData
}
  }
  render(){
    const todoItems = this.state.todos.map(item =>
      <TODO key={item.id} item={item}/>)
    return(
      <div className="todo-list">
        <div className="jendo"> MY TODO LIST </div>
        {todoItems}</div>

    )
}
  }
  

export default App