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
    const [tog, setTog] = useState(false);

    function handleDisplay(){
        setTog(!tog)
    }

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
                    <Link to="/UserProfile">
                        <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={account}></img></span>Account</li>
                    </Link>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white"><span><img class="w-30 p-3 inline-block" src={settings}></img></span>Setting</li>
                    <li class="pt-2 font-mono hover:bg-purple-500 cursor-pointer hover:text-white">Log Out</li>
                </ul>
            </div>
            </div>

            <div class="col-span-2 bg-slate-100">
            <div class="flex justify-end">
                <div class="bg-purple-500 p-2 m-3 sm:w-44 xl:w-72 text-center rounded-xl">
                    <Link to="/PostArticlePage">
                        <p class="sm:text-xl sm:p-2 font-mono xl:text-3xl xl:p-4 text-white cursor-pointer">Post Article</p>
                    </Link>
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
                    <p>Title: "Preserving Nigeria's Rich Tapestry: Navigating Cultural Heritage and the Perils of Loss"
                        Introduction:
                        In the heart of Nigeria, a nation adorned with a 
                        vibrant tapestry of cultural heritage, the echoes 
                        of centuries past resonate through diverse traditions, 
                        art, and history. However, the relentless march of time, 
                        coupled with contemporary challenges, poses a threat to this 
                        rich heritage. This feature article seeks to shed light on the 
                        delicate balance between preserving Nigeria's cultural legacy 
                        and the looming specter of cultural loss.
                        <br></br>
                        <br></br>
                        I. The Tapestry of Nigeria's Cultural Heritage
                        a. An exploration of Nigeria's diverse ethnic groups and their unique cultural identities
                        b. The significance of traditional practices, rituals, and oral histories in preserving cultural heritage
                        c. UNESCO World Heritage Sites in Nigeria and their importance in global heritage conservation
                        <br></br>
                        <br></br>
                        <span className={tog === true ? "displayContent" : "invi"}>
                        II. The Impact of Modernization and Globalization
                        <br></br>
                        a. Urbanization and its effect on traditional communities and practices
                        <br></br>
                        b. The role of globalization in influencing cultural homogenization
                        <br></br>
                        c. Challenges posed by rapid development to the preservation of cultural diversity
                        <br></br>
                        <br></br>
                        III. Cultural Heritage Sites Under Threat
                        <br></br>
                        a. Case studies of endangered cultural sites in Nigeria
                        <br></br>
                        b. The impact of climate change, natural disasters, and human activities on cultural landmarks
                        <br></br>
                        c. Efforts and initiatives to safeguard at-risk heritage sites
                        <br></br>
                        <br></br>
                        IV. The Role of Technology in Cultural Preservation
                        <br></br>
                        a. Digital archiving and documentation of cultural artifacts and traditions
                        <br></br>
                        b. Virtual reality and augmented reality applications in promoting cultural awareness
                        <br></br>
                        c. Collaborative efforts between technology experts and cultural preservationists
                        <br></br>
                        <br></br>
                        V. Community-Led Conservation Efforts
                        <br></br>
                        a. Grassroots movements to protect and promote cultural heritage
                        <br></br>
                        b. The importance of involving local communities in heritage preservation
                        <br></br>
                        c. Success stories of community-driven initiatives preserving cultural practices and traditions
                        <br></br>
                        <br></br>
                        Conclusion:
                        In the face of modern challenges, Nigeria stands 
                        at a crossroads, with the choice between embracing 
                        progress and safeguarding its rich cultural heritage. 
                        As we navigate this delicate balance, the imperative 
                        is clear — fostering a synergy between tradition and 
                        innovation, community involvement, and global awareness. 
                        Nigeria's cultural legacy is a treasure trove that, once 
                        lost, cannot be reclaimed. It is incumbent upon us, as 
                        stewards of this heritage, to ensure that the echoes of 
                        Nigeria's past continue to resonate for generations to come, 
                        weaving a narrative that transcends time and connects us to 
                        our shared human history.
                        </span>
                        <p onClick={handleDisplay} className="font-mono font-semibold cursor-pointer" id="readMore"
                        >{tog ? 'Read Less': 'Read More'}</p>
                        </p>
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