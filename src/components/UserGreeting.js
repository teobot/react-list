import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Logged In</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div>Logged in</div> :
        //     <div>Not Logged in</div>
        // )

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Logged In</div>
        // } else {
        //     message = <div>Not Logged In</div>
        // }
        // return message

        // if(this.state.isLoggedIn) {
        //     return (<div>Logged in</div>) 
        // } else { 
        //     return(<div>Not Logged</div>)
        // }

    }
}

export default UserGreeting
