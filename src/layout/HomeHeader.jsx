import { Link, useNavigate } from "react-router-dom";
import "../layout/HomeHeader.css"
import pic from "../LandingComponent/assets/profile.svg"
import { useCallback } from "react";

export default function Header() {
  const navigateTo = useNavigate();
  const displayMail = () => {
    alert("bluma@bluma.com");
  };
  const navigate = useNavigate()

  const navigateToUserProfile = (parameter) =>{
     navigate("/UserProfile", {state: {value: parameter}})
  }
  return (
    <>
      <header class="header">
        <div className="topNav">
            {/* <div class="navBar sm:text-2xl"> */}
               {/* <nav class="p-4"> */}
               <div className="words">
                  <Link to="/HomePage">
                  <p class=" text-purple-500 font-bold sm:text-2xl ">Welcome to Bluma </p>

                  </Link>
                    {/* <p class=" text-purple-500 font-bold sm:text-2xl ">Welcome to Bluma </p> */}
                  
               </div>
               <Link to="/events">
                       <p className="words">Events</p>
                </Link>
                <Link to="/About">
                   <p className="words">About</p>
                </Link>
                <Link to="/About">
                   <p onClick={displayMail} className="words">Contact us</p>
                </Link>
                <Link to="/UserProfile">
                <p className="words" > <img src={pic} alt="" style={{width:"30px"}} /></p>

                </Link>
                   
           </div>
      </header>

      
    </>
  );
}
