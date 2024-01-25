import { Link, useNavigate } from "react-router-dom"
import AddArticleBtn from "../LandingComponent/Button&Search/addArticleBtn";
export default function Header(){

    const navigateTo = useNavigate();
    return(
        <>
        <header class="header">
            <div class="p-3 uppercase">
                <p class=" text-purple-500 font-bold sm:text-4xl ">Bluma</p>
            </div>
            <div class="list-none flex sm:justify-end md:justify-end xl:justify-end">
                {/* <AddArticleBtn/> */}
                <li>
                {/* <Link to="/Signup" >
                    <p class="btn p-3 w-40 text-center
                      cursor-pointer rounded border-purple-600 border-2
                    ">Sign Up</p>
                </Link>
                </li>
                <li/>
                <li>
                <Link to="/Signup" >
                    <p class="btn p-3 w-40 text-center ml-10
                      cursor-pointer rounded border-purple-600 border-2
                    ">Log In</p>
                </Link> */}
                </li>
            </div>
        </header>

        <div class="navBar sm:text-2xl">
            <nav class="p-4">
                <ul class="sm:text-2xl md:text-3xl xl:text-3xl md:flex xl:flex justify-center">
                    <li class="border-b-4 px-4 border-purple-600 py-4 sm:pt-2 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Home</li>
                    <li class="sm:pt-2 px-4 pb-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Library</li>
                    <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Event</li>
                    <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">About Team</li>
                    <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Contact Us</li>
                </ul>
            </nav>
        </div>


        </>
    )
}