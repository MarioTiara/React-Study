import React, { Component } from 'react'
import Input from './Input';
class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef();
    }

    clickHanlder=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHanlder}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput