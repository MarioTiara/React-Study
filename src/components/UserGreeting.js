import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let message;
        if (this.state.isLoggedIn){
            message= <div>Welcome Mario</div>
        }else{
            message= <div>Welcome Guest</div>
        }

        return message;
        // return (
        //     <div>
        //         <div>Welcome Mario</div>
        //         <div>Welcome Guest</div>
        //     </div>

        // )
    }
}

export default UserGreeting