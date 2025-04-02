import React from "react";
import { Component } from "react";
class Unmount extends Component{
    constructor(){
        super()
        this.state={
            delete:false
        }
    }

    render(){
        return(
            <div>
                <h1>User List</h1>
                <button onClick={()=>{this.setState({delete:!this.state.delete})}}></button>
                {this.state.delete ? null:<User/>}
            </div>
        )
    }
}

class User extends Component{
    componentWillUnmount(){
        alert("Deleted user Successfully")
    }
    render(){
        return(
            <div>
                <h3>User name: Mayur</h3>
            </div>
        )
    }
}

export {Unmount}