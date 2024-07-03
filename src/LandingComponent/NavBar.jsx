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
        style={{backgroundColor: isScroll ? 'rgb(255, 255, 255, 0.2)' : 'rgb(255, 255, 255, 0.2)'}}

        className={`tw-flex tw-z-10 tw-justify-center tw-items-center tw-px-16 tw-py-6 tw-w-full  max-md:tw-px-5 max-md:tw-max-w-full tw-fixed tw-top-0`}
    >
      <BlumaLogo />
      {/*<div className="links">*/}
      {/*  <NavLink to="about">About</NavLink>*/}
      {/*  <NavLink to="products">Products</NavLink>*/}
      {/*  <NavLink to="events">Events</NavLink>*/}
      {/*</div>*/}
      {/*<div className="check-in">*/}
      {/*<Link to={`/Login`}>Log in</Link>*/}
      {/*</div>*/}
      {/*<Hambuger />*/}
    </header>
  );
}

export default NavBar;
