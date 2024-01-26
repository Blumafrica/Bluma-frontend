import Cards from "./Cards";
import analysis from "../images/analysis.svg";
import account from "../images/profile.svg";
import feed from "../images/feed.svg";
import settings from "../images/setting.svg";
import team from "../images/team.svg";
import favorite from "../images/favorite.svg";
import draft from "../images/drafts.svg";
import {Link} from "react-router-dom";
import { useState } from "react";
import articleImage from "../images/ArticleImage.jpg"


export default function ColumnPage(){
    const [toggle, setToggle] = useState(1);

    function handleVisibility(id){
        setToggle(id)
    } 
    
    return(
        <>
        <div class="grid grid-cols-3">
            <div class="col-span-1">
            <div>
                <ul class="list-none text-left text-3xl m-3 p-2">
                    <label class="text-3xl p-2 font-bold text-gray-600 font-mono">Overview</label>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={feed}></img></span>Feed</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={favorite}></img></span>Book Marks</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={team}></img></span>Team Blogs</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={draft}></img></span>Drafts</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={analysis}></img></span>Analytics</li>
                    <label class="text-3xl p-2 font-bold text-gray-600 font-mono">Trending Tags</label>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Programming</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Data Science</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Technology</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Maching Learning</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Politics</li>
                    <label class="text-3xl p-2 font-bold text-gray-600 font-mono">Personal</label>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={account}></img></span>Account</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={settings}></img></span>Setting</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Log Out</li>
                </ul>
            </div>
            </div>

            <div class="col-span-2 bg-slate-100">
            <div class="flex justify-end">
                <div class="bg-purple-500 p-2 m-3 sm:w-44 xl:w-72 text-center rounded-xl">
                    <p class="sm:text-xl sm:p-2 font-mono xl:text-3xl xl:p-4 text-white">Post Article</p>
                </div>
            </div>
            <div>
                <div>
                    <ul class="uppercase flex justify-between p-3 text-3xl m-3">
                        <Link onClick={() => handleVisibility(1)} className="feeds border-b-4 focus:border-purple-600"><li>Feeds</li></Link>
                        <Link onClick={() => handleVisibility(2)} className="featuredArticleBtn border-b-4 focus:border-purple-600"><li>Featured Article</li></Link>
                        <Link onClick={() => handleVisibility(3)} className="recentBtn border-b-4 focus:border-purple-600"><li class="border-b-4 ">Recent</li></Link>
                    </ul>
                </div>
            </div>

            <div className={toggle === 1 ? "feeds-content" : "invi"}>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
            </div>

            <div className={toggle === 2 ? "featured-article-content" : "invi"}>
                <div class="col-span-2 text-2xl p-2 flex">
                    <div class="p-2">
                    <h2 class="text-3xl font-bold uppercase font-mono">Problem Of the Day</h2>
                    <p>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                    when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                    when looking at its layout. The point of using Lorem It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                    when looking at its layout. The point of using Lorem</p>
                    <img class="m-2" src={articleImage} alt=""></img>
                    </div>
                </div>
            </div>

            <div className={toggle === 3 ? "recent-content" : "invi"}>
                    <Cards />
            </div>
            </div>
        </div>
        </>
    )
}