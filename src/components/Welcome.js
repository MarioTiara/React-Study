import React, {Component} from "react";

class Welcome extends Component {
    render(){
        const {name, herroName}=this.props
        return <h1>Welcome {name} a.k.s {herroName}</h1>
    }
}

export default Welcome