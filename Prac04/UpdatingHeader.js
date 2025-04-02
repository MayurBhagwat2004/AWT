import React from "react";
import { Component } from "react";

class Header extends Component{
    constructor(props){
        super()
        this.state = {
            favouriteColor : "Red"
        }    
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                favouriteColor:"green"
            })
        }, 2000);
    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML = "Before Updating the color: "+prevState.favouriteColor
    }

    componentDidUpdate(){
        document.getElementById("div1").innerHTML = "After Updating the color: "+this.state.favouriteColor
        
    }
    render(){
        return(
            <>
            <h1>My favouriteColor is {this.state.favouriteColor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>

            </>
        )
    }
}

export {Header}