import { Link, useNavigate } from "react-router-dom"

export default function Header(){

    const navigateTo = useNavigate();
    return(
        <>
        <header class="header">
            <div class="p-3 uppercase flex">
                <div className="w-3/5">
                    <p class=" text-purple-500 font-bold sm:text-4xl ">Bluma</p>
                </div>
                <div class="w-3/5 list-none flex sm:justify-end md:justify-end xl:justify-end">
                    <li>
                    <Link to="/Login" >
                        <p class="btn p-3 w-40 text-center
                        cursor-pointer rounded border-purple-600 border-2
                        ">Sign Up</p>
                    </Link>
                    </li>
                    <li/>
                    <li>
                    <Link to="/Login" >
                        <p class="btn p-3 w-40 text-center ml-10
                        cursor-pointer rounded border-purple-600 border-2
                        ">Log In</p>
                    </Link>
                    </li>
                </div>
            </div>
        </header>

        <div class="navBar sm:text-2xl">
            <nav class="p-4">
                <ul class="sm:text-2xl md:text-3xl xl:text-3xl md:flex xl:flex justify-center">
                    <Link to="/">
                        <li class="border-b-4 px-4 border-purple-600 py-4 sm:pt-2 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Home</li>
                    </Link>
                    <li class="sm:pt-2 px-4 pb-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Library</li>
                    <Link to="/events">
                        <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Event</li>
                    </Link>
                    <Link to="/About">
                        <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">About</li>
                    </Link>
                    <li class="sm:pt-2 py-4 px-4 sm:mr-5 md:mr-10 xl:mr-10 cursor-pointer hover:bg-slate-300">Contact Us</li>
                </ul>
            </nav>
        </div>


        </>
    )
}