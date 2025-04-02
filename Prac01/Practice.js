import React from "react";

export const Car = (props) => {
    return(
        <h2>I am a {props.name}</h2>
    )
}

export const EnginePower = (props) => {
    return(
        <h3>My Engine is of {props.power} cc</h3>
    )
}

export const CarName = () => {
    return(
        <>
        <Car name="Mclaren 720s"/>
        <EnginePower power = "2000"/>
        </>
    )
}