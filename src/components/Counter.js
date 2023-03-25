import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increase(){
        // NOTE => this.setState is an async method so if you want to execute a code after this.setState is finished, you gotta use claback function
        // this.setState({
        //     count:this.state.count+=1
        // },()=> {
        //     console.log('calback value: ', this.state.count);
        // })

        this.setState(prevState=>({
            count:prevState.count+1
        }))

        console.log(this.state.count);
    }

    increamentFive(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }
  render() {
    return (
      <div>
        <h1>Coount - {this.state.count}</h1>
        <button onClick={()=> this.increamentFive()}>Increament</button>
      </div>
    )
  }
}

export default Counter