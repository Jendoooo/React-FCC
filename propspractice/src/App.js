import React from "react"
import Product from "./components/product"
import productsData from "./components/productdata"

function App(){
  // using the concept of higher order arrays to generate a new set of data
  // now after the using this concept we want to save it to a variable so 
  // we can use the new set of data generated 

  // the Productindexes inside of thie map bracktet below is the individual indexes data 
  const productComponents =productsData.map(Productindexes=>{
    return (<Product key={Productindexes.id} name={Productindexes.name} price={Productindexes.price}/>)})
   
  return(
    <div>
      {/* react allows us to put the array of components in the jsx, so I will be donig that now  */}
      {productComponents}
    </div>
  )
}


export default App


