import React  from "react";

// function Greet(){
//     return <h1>hello mario</h1>
// }

const Greet =props=>{
  const {name, herroName}=props;
  return (
    <div>
        <h1>hello {name} a.k.a {herroName}</h1>
    </div>
    
  ) 
} 

export default Greet