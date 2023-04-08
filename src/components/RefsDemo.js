import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef();
      this.Cbref=null;
      this.setCBref=(element)=>{
        this.Cbref=element;
      }
    }
    componentDidMount(){
        if (this.Cbref){
            this.Cbref.focus();
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }
    clickHandler=()=>{
        alert(this.Cbref.value);
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCBref}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo