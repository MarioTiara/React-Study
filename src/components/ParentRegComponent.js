import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

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
        console.log("render parent")
        return (
            <div>
                ParentRegComponent
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}

                <MemoComp name={this.state.name}/>

            </div>
        )
    }
}

export default ParentRegComponent