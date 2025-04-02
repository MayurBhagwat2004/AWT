import react, { useState } from "react";

function Mayur_248604()
{
    const [inputVal,setInputVal] = useState("")
    const handleSubmit = (event) =>
        {
            event.preventDefault();
            console.log("Form not submitted");
            console.log(inputVal);
            
        }

        return(
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>{setInputVal(e.target.value)}}></input>
                <button type="submit">Click</button>
            </form>
        )
}

export function DetectKeys()
{
    const [key,setKey] = useState("")
    const [message,setMessage] = useState("");

    const handleKeyDown = (event) =>
    {
        setKey(event.key)

        if(event.ctrlKey && event.key==="w")
        {
            event.preventDefault()
            setMessage(`You Pressed Ctrl+w !!!`);
        }
    }

    const handleKeyUp = (event) =>
    {
        setMessage("You Released the key "+event.key);
    }

    return(
        <div onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} tabIndex={0}
        style=
        {
            {
            border:'2px solid black',
            padding:'20px',
            width:"300px",
            margin:"50px auto",
            textAlign:"center",
            borderRadius:"12px",
            fontFamily:"arial",
            outline:"none"
            }
        }
        >
            <h1>React Key Events</h1>
            <p>Press any key and see the result below</p>
            <p><strong>Last Key Pressed:</strong>{key}</p>
            <p><strong>Message:</strong>{message}</p>

        </div>
    )
}


export  function ArrayMethods()
{
    let fruits = ["apple","banana","papaya"]
    console.log(`Before: ${fruits}`)
    fruits.push("mango")
    console.log(`After Adding mango: ${fruits}`)
    fruits.pop()
    console.log(`After removing mango: ${fruits}`)
    fruits.splice(1,2)
    console.log(`Removed 2 elements from list: ${fruits}`);
    
}

export default Mayur_248604