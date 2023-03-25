import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hallo"
      }
    }
    clickHandler (){
        this.setState({
            message:"goodBy"
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler.bind(this)}>click</button>
      </div>
    )
  }
}

export default EventBind