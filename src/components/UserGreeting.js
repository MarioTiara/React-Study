import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn){
            return <div>Welcome Mario</div>
        }else{
            return <div>Welcome Guest</div>
        }
        // return (
        //     <div>
        //         <div>Welcome Mario</div>
        //         <div>Welcome Guest</div>
        //     </div>

        // )
    }
}

export default UserGreeting