import Cards from "./Cards";
import analysis from "../images/analysis.svg";
import account from "../images/profile.svg";
import feed from "../images/feed.svg";
import settings from "../images/setting.svg";
import team from "../images/team.svg";
import favorite from "../images/favorite.svg";
import draft from "../images/drafts.svg";


export default function ColumnPage(){
    return(
        <>
        <div class="flex justify-center">
            <div class="col-span-2 bg-slate-100">
            <div class="flex justify-end">
                <div class="bg-purple-500 p-2 m-3 sm:w-44 xl:w-72 text-center rounded-xl">
                    <p class="sm:text-xl sm:p-2 font-mono xl:text-3xl xl:p-4 text-white">Post Article</p>
                </div>
               </div>
            <div>
                <div>
                    <ul class="uppercase flex justify-between p-3 text-3xl m-3">
                        <li class="border-b-4 border-purple-600">Feeds</li>
                        <li class="border-b-4 ">Featured Article</li>
                        <li class="border-b-4 ">Recent</li>
                    </ul>
                </div>
            </div>
            <div class="grid xl:grid-cols-2">
                <Cards />
               <Cards />
               <Cards />
               <Cards />
            </div>
            </div>
        </div>
        </>
    )
}


