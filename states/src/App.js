import React from "react"

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }
//   render(){
//     return (
//     <div>
//       <h1>Is state important to know ? </h1>
//       <h1> {this.state.answer}</h1>
     
//     </div>
//     )
//   }
// }
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {name:"Olajide", age: 29}
//   }
//   render(){
//     return(
//       <div>
//         <h1>I am {this.state.name}</h1>
//         <h2> And I am {this.state.age} years old</h2>
//       </div>
      
//     )
//   }
// }

// // Another pracitce 


// class App extends Component{
//   constructor(){
//     super()
//     this.state = {isloggedin : true}
//   }
//   render(){
//     let display
//     if (this.state.isloggedin){
//       display = "in"

//     }else {
//       display = "out"
//     }
//     return(
//       <div>
//         <h1> My boy , you are currently logged {display}</h1>
//       </div>
//     )
//   }
// }

// on changing state


class App extends React.Component{
  constructor(){
    super()
    this.state = {count: 1}
    this.handleClick = this.handleClick.bind(this)
  }

  // handleClick(){
  //   this.setState({count : 55})
  // }

  handleClick(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1 
      }
    })
  }
  render(){
    return(
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.handleClick} > Click me</button>
      </div>
    )
  }
}


  
export default App 