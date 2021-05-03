import React from "react"

function handleClick(){
  console.log("I was clicked")
}
function App() {
  return (
    <div>
     <img onMouseOver={()=> console.group("Hovered!!")} alt= "this has a logo" src="./studysmart logo"></img>
     <br/>
     <br/>
     <button onClick={handleClick}>Click me Please</button>
    </div>
  );
}

export default App;
