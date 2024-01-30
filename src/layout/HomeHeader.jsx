import { Link, useNavigate } from "react-router-dom";
import Notification from "../LandingComponent/notification/Notification";
import styled from "styled-components";

const Container= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Header() {
  const navigateTo = useNavigate();
  const displayMail = () => {
    alert("bluma@bluma.com");
  };
  return (
    <Container>
      <header class="header">
        <div class="p-3 uppercase">
          <div className="w-3/5">
            <p class=" text-purple-500 font-bold sm:text-4xl ">Bluma</p>
          </div>
        </div>
      </header>

      <div class="navBar sm:text-2xl">
        <nav class="p-4">
          <ul class="sm:text-4xl md:text-3xl xl:text-3xl md:flex xl:flex justify-center">
            <Link to="/HomePage">
              <li class="border-b-4 px-4 border-purple-600 py-4 sm:pt-2 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">
                Home
              </li>
            </Link>
            <li class="sm:pt-2 px-4 pb-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">
              Library
            </li>
            <Link to="/events">
              <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">
                Event
              </li>
            </Link>
            <Link to="/About">
              <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">
                About
              </li>
            </Link>
            <li
              class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300"
              onClick={displayMail}
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
      <Notification/>
    </Container>
  );
}
