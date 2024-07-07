import React, {useCallback, useEffect, useState} from "react";
import BlumaLogo from "./Button&Search/BlumaLogo";
import { NavLink } from "react-router-dom";
import Hambuger from "./Button&Search/hambuger";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";


function NavBar() {

    const navigate = useNavigate();

    const  [isScroll, setIsScroll] = useState(false)

    useEffect( () => {
        const handleScrollBar = () =>{
            setIsScroll(window.scrollY > 700)
        }
        window.addEventListener("scroll", handleScrollBar)
        return () => window.addEventListener('scroll', handleScrollBar)

    })

  return (
    
    <header
        className={`flex z-10 justify-center items-center px-16 py-6 w-full bg-#2f2f2d max-md:px-5 max-md:max-w-full fixed top-0 ${isScroll ? `bg-#2f2f2d` : `bg-rgba(255, 255, 255, 0.2)`}`}
    >
       <div
           className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full"
       >
           <BlumaLogo textColor={isScroll ? 'black' : 'white'} />
          <div className={`flex gap-4`}>
                 <NavLink to="about" className={`${!isScroll ? 'text-1xl text-white' : ''}`}>About</NavLink>
                 <NavLink to="products" className={`${!isScroll ? 'text-1xl text-white' : ''}`}>Products</NavLink>
                 <NavLink to="events" className={`${!isScroll ? 'text-1xl text-white' : ''}`}>Events</NavLink>
         </div>
        {/*<Hambuger />*/}
       </div>
    </header>
  );
}

export default NavBar;
