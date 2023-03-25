import React from 'react'

 function ChildComponent (props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler("child")}>greetP arent</button>
    </div>
  )
}

export default ChildComponent
