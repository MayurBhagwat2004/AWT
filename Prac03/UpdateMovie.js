import React,{useState,useReducer} from "react";

export const UpdateMovie = () =>{
    const [movieName,setMovieName] = useState("The Pursuit Of Happyness");

    return(
        <div>
            <h1>You are Watching : {movieName}</h1>
            <button onClick={()=>{setMovieName("Avatar: The Way Of Water")}}>Update Movie</button>
        </div>
    )
}

function Reducer(state,action){
    switch (action.type){
        case "increment":
            return {age:state.age+1}
        case "decrement":
            return {age:state.age-1}
        case "reset":
            return {age:20}
        default:
            return state.age
    }
}

export const UpdateAge = () => {
    const initialVal = {age:20}
    const [state,dispatch] = useReducer(Reducer,initialVal);
    return(
        <>
        <h1>Age: {state.age}</h1>
        <button onClick={()=>{dispatch({type:"increment"})}}>increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
        <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
        
        </>
    )
}
