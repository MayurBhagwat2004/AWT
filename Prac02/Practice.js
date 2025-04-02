import React from "react";
import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        console.log(this.state.count);
        
    }
    increment_four(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }

    render(){
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=>{this.increment()}}>Increment</button>
                <button onClick={()=>{this.increment_four()}}>Increment Four</button>

            </div>
        )
    }

}


export {Counter}