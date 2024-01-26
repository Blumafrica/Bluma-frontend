import Header from "../layout/header";
import background from "../images/background.jpg";
import ColumnPage from "../component/ColumnPage";
import Footer from "../layout/Footer";


export default function Homepage(){
    return(
        <>
        <Header />
        <div class="relative">
            <div class="brightness-">
                <img class="w-screen h-fit brightness-75 brigh bg-fixed" src={background} alt="slide"></img>
            </div>

            <div class="absolute backdrop-brightness-110 bg-black/30 p-3 sm:w-fit xl:w-3/4 text-center sm:bottom-10 xl:bottom-20 xl:left-80">
                <h3 class="sm:text-3xl md:text-5xl xl:text-7xl font-bold text-white">THE TITLE HERE</h3>
                <p class="sm:text-xl md:text-3xl xl:text-3xl text-white">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                     when looking at its layout. The point of using Lorem 
                </p>
                <div class="flex justify-center m-2">
                <p class="sm:w-40 sm:p-2 xl:text-2xl font-bold xl:p-3 xl:w-60 bg-purple-600 border-none text-white m-3 rounded-3xl cursor-pointer">CLICK HERE</p>
                </div>
            </div>

        </div>
        <ColumnPage />
        <div class="bg-black text-white p-3">
            <div class="grid grid-cols-2 p-4">
            <div class="p-2">
                <h1 class="text-5xl font-mono">Building an Online Community </h1>
                <p class="text-2xl">We're the leading company of all </p>
            </div>
            <div class="text-center">
                <input class=" w-3/4 text-2xl p-4 text-center text-black" type="text" placeholder="Enter Message"></input>
                <div class="flex justify-center">
                <p class="cursor-pointer m-4 p-3 text-2xl w-1/3 bg-black text-white rounded-lg">Send Message</p>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}