import React, { useState } from "react";

const Count1 = () => {
    const [counter,setCounter] = useState(0)

    return(
        <div>
            <p>You Clicked {counter} times</p>
            <button onClick={()=>{setCounter(counter+1)}}></button>
        </div>
    )
}

export {Count1}