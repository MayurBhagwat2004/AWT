import React, { useEffect, useRef, useState } from "react";

export function FocusRef()
{
    
    const focusRef = useRef(null)
    const callFocusRef = ()=>{
        focusRef.current.focus()
    }
    useEffect(()=>{
        focusRef.current.focus()
    },[])
    return(
        <div>
            <h1>Focus on button click</h1>
            <input type="text" ref={focusRef}></input>
            <button onClick={callFocusRef}>Click me to focus</button>
        </div>
    )

}

export function FormUseRef()
{
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const [submittedData,setSubmittedData] = useState(null)
    
    useEffect(() => {
        console.log("Updated Submitted Data:", submittedData.username);
    }, [submittedData]);

    const handleSubmit = (event) =>{
        event.preventDefault()
        const username = usernameRef.current.value
        const email = emailRef.current.value
        setSubmittedData({username,email})
        usernameRef.current.value = ""
        emailRef.current.value = ""
        console.log("Submitted Data: "+submittedData);
        console.log("Submitted Data:", { username, email });

    }

    return(
        <div>
            <h2>Form with ref</h2>
            <form onSubmit={handleSubmit}>
            <label>Enter username: </label>
            <input type="text" ref={usernameRef}></input>
            <label>Enter email: </label>
            <input type="text" ref={emailRef}></input>
            <button type="submit">Click</button>
            </form>
            <h3>
            </h3>
        </div>
    )

}