import React, { useEffect, useState } from "react";

export function TimerUsingUseEffect()
{
    const [timer,setTimer] = useState(30)

    useEffect(()=>{
        if(timer<=0)
        {
            return
        }
        const interval = setInterval(()=>{
            setTimer((prevVal)=> prevVal-1)
            console.log('remaining time',timer )
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[timer])
    return(
        <div>
            Time Remaining: {timer}
        </div>
    )
}

export function SizeUseEffect()
{
    const [currentSize,setCurrentSize] = useState({width:window.innerWidth,height:window.innerHeight})
    useEffect(()=>{
        const handleChanges = () =>{
            setCurrentSize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',handleChanges)
        return()=>{
            window.removeEventListener('resize',handleChanges)
        }
    },[])

    return(
        <div>
            <p>Current width: {currentSize.width}</p>
            <p>Current height: {currentSize.height}</p>
        </div>
    )

}

export function InputUseEffect()
{
    const [nameInput,setNameInput] = useState("")
    const [isValid,setIsValid] = useState(true)
    
    useEffect(()=>{
        console.log("Input changed"+nameInput);
        const isValidInput = nameInput.length >5
        setIsValid(isValidInput)
    },[nameInput])

    const handleInputChange = (event)=> {
        setNameInput(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(isValid)
        {
            console.log("Form submitted with valid input: "+nameInput);
            
        }
        else
        {
            console.log("Form not submitted: "+nameInput);
            
        }
    }
    return(
     <div>
        <form onSubmit={handleSubmit}>
        <label>Enter name: </label>
        <input type="text" onChange={handleInputChange}></input>
        <button type="submit">Click</button>
        </form>
        {!isValid && <p style={{color:"red"}}>Input Must be more than 5 characters</p>}
     </div>   
    )
}