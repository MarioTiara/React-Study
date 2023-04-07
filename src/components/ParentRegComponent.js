import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentRegComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"mario"
        }
      }
  
      componentDidMount(){
          setInterval(()=>{
              this.setState({
                  name:"pratama"
              })
          }, 2000)
      }
    render() {
        return (
            <div>
                ParentRegComponent
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>

            </div>
        )
    }
}

export default ParentRegComponent