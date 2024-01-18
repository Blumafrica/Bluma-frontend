import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function FailedSignUp () {

    const [message , setMessage] = useState("");
    const data = useLocation().state;


    return (
        <div  className="container">


        </div>
    )

 


}

export default FailedSignUp;