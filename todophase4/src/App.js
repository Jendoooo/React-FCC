import React from "react"
import TODO from "./components/todoitem"
import "./styles.css"
import todoData from "./components/todojsonData"

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: todoData
// }
//   }
//   render(){
//     const todoItems = this.state.todos.map(item =>
//       <TODO key={item.id} item={item}/>)
//     return(
//       <div className="todo-list">
//         <div className="jendo"> MY TODO LIST </div>
//         {todoItems}</div>

//     )
// }
//   }


// EVENT handler , making it that the handlechange method is the one marking it
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todoData}
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(id) {
  // console.log("changed", id)
  this.setState(prevState => {
    const updatedTodos = prevState.todos.map(TODO => {
      if (TODO.id === id){
        TODO.completed = !TODO.completed
      }
      return TODO
    })
    return {
      todos: updatedTodos
    }
  })

  }
  render(){
    const todoItems = this.state.todos.map(item =>
      <TODO key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className="todo-list">
        <div className="jendo"> MY TODO LIST </div>
        {todoItems}</div>

    )
}
  }
  

export default App