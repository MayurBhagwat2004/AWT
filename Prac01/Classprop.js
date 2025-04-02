import React from "react";

export const Brand = (props) =>{
    return(
        <div>
            <h1>Brand: {props.brand}</h1>
        </div>
    )
}

export const Bike = (props) =>{
    return(
        <div>
            <Brand brand="Pulsar"/>
            <h1>Bike: {props.bike}</h1>
        </div>
    )
}