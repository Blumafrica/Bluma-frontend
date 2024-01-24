import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Error () {

    const [message , setMessage] = useState("");
    const data = useLocation().state;


    return (
        <div  className="container">
            <div>
                Error message: {data.message}
            </div>


        </div>
    )

 


}

export default Error;