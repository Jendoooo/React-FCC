import React from "react"
import Joke from "./components/joke"


function App(){
  
  return(
    <div>
      
      <Joke
      qanda ={{question:"how MUCH is the joke",
      punchline:"A suitable response "}}/>

      <Joke
      qanda ={{question:"another level",
      punchline:"Olamide "}}/>

      <Joke
      qanda ={{
      punchline:"Olamide wey no get question "}}/>
      
      <Joke
      qanda ={{question:"Suddenly",
      punchline:"Dbanj"}}/>
      
      <Joke
      qanda ={{punchline:"Olamide "}}/>
      
    </div>
  )
}


export default App
