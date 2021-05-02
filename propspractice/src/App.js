import React from "react"
import Joke from "./components/joke"
import jokesData from "./components/jokesdata"

function App(){
  // using the concept of higher order arrays to generate a new set of data
  // now after the using this concept we want to save it to a variable so 
  // we can use the new set of data generated 

  // the jokeindexes inside of thie map bracktet below is the individual indexes data 
  const jokeComponents =jokesData.map(jokeindexes=>{
    return (<Joke question={jokeindexes.question} punchline={jokeindexes.punchline}/>)})
  
  return(
    <div>
      {/* react allows us to put the array of components in the jsx, so I will be donig that now  */}
      {jokeComponents}
    </div>
  )
}


export default App
