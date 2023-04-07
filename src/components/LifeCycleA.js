import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      names: 'mario'
    }

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps")
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("LifecycleA ShouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate");
  }

  changeState=()=>{
    this.setState({
      name:"mario tiara"
    })
  }
  render() {
    console.log("LifeCycleA render")
    return (<div>
      <div>LifeCycle</div>
      <button onClick={this.changeState}>Change Status</button>
      <LifeCycleB />
    </div>

    )
  }
}

export default LifeCycleA