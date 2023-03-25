import React  from "react";

// function Greet(){
//     return <h1>hello mario</h1>
// }

const Greet =props=>{
  return (
    <div>
        <h1>hello {props.name} a.k.a {props.herroName}</h1>
        {props.children}
    </div>
    
  ) 
} 

export default Greet