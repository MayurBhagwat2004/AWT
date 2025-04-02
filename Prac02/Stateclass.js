import React, { Component } from "react";

class Movie extends Component
{
    constructor()
    {
        super()
        this.state = { message: "Welcome Mayur"}
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.ChangeMovieDesc()}}>Click Me</button>
            </div>
        )
    }

    ChangeMovieDesc()
    {
        this.setState(
            {
                message:"You Are now watching The Exorcist"
            }
        )
    }
}

class Counter extends Component
{
    constructor()
    {
        super()
        {
        this.state = 
        {
            count:0
        }

        }
    }

    render()
    {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>{this.increment()}}>Click</button>
            </div>
        )
    }

    increment()
    {
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }
    incrementFour()
        {
            this.increment()
            this.increment()
            this.increment()
            this.increment()
            //react may group multiple state calls into a single update for better performance
        } 

}
export {Movie,Counter};