import articleImage from "../images/ArticleImage.jpg"
import profileImage from "../images/Kashim.jpg";
import likeIcon from "../images/like.svg";
import commentIcon from "../images/comment.svg";
import shareIcon from "../images/share.svg";
import { useState } from "react";
export default function Cards(props){
    const [toggle, setToggle] = useState(false);
    const [like, setLike] = useState(0);

    function handleDisplay(){
        setToggle(!toggle);
    }

    function countLike(){
        setLike(like + 1);
    }
    return(
        <>
        <div>
            <div class="hover:shadow-2xl border-2 border-black-500 bg-white h-fit m-3 rounded-xl text-xl rounded-3 overflow-hidden shadow-md">
            <div>
                <img src={articleImage} alt=""></img>
            </div>
            <div>
                <h3 class="sm:text-2xl md:text-3xl xl:text-3xl text-center font-bold font-mono p-2">Facts about Nigerian Culture</h3>
                <p class="md:text-2xl xl:text-2xl p-2 text-center">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                    when looking at its layout. The point of using Lorem </p>
            </div>
            <div>
                <p onClick={() => {
                    handleDisplay();
                }} className="read-more text-2xl font-mono font-bold flex justify-end p-3 cursor-pointer">Read More...</p>
                <div className={toggle === true ? "displayContent" : "invi"}>
                <p class="text-2xl p-2">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Loremmby the readable content of a page
                    when looking at its layout. The point of using Lorem </p>
                </div>
            </div>
            <div class="m-4">
                <div class="flex">
                    <div>
                    <img class="rounded-full h-32 w-28" src={profileImage}></img>
                    </div>
                    <div class=" mt-12 ml-3">
                        <p class="font-bold font-mono text-2xl">Kashim John Nedu</p>
                        <p>13th Jun, 2023</p>
                    </div>
                </div>


                <div class="flex justify-end">
                    <div class="text-center justify-center">
                    <img onClick={() => {
                        countLike();
                    }} class="ml-5 w-9 cursor-pointer" src={likeIcon}></img>
                    <p>{like}</p>
                    </div>
                    <div>
                    <img class="ml-5 w-9 cursor-pointer" src={commentIcon}></img>
                    </div>
                    <div>
                    <img class="ml-5 w-9 cursor-pointer" src={shareIcon}></img>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}