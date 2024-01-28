import articleImage from "../images/ArticleImage.jpg"
import profileImage from "../images/Kashim.jpg";
import likeIcon from "../images/lovesvg.svg";
import likedBlueIcon from '../images/loveBlue.svg'
import commentIcon from "../images/comment.svg";
import shareIcon from "../images/share.svg";
import { useState } from "react";
export default function Cards(props){
    const [toggle, setToggle] = useState(false);
    const [like, setLike] = useState(0);
    const [liked, setLiked] = useState(false)

    function handleDisplay(){
        const read_More = document.getElementById("readMore")
        setToggle(!toggle)
        if (toggle){
            read_More.innerHTML = 'Read More'
        }
        else{
            read_More.innerHTML = 'Read Less'
        }
    }

    function handleBackgrounfColor(){
        setLiked(!liked)
    }
    function handdleClicking(){
        if(liked){
            setLike(like - 1);
        }
        else{
            setLike(like + 1);
        }
        handleBackgrounfColor();
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
                    when looking at its layout. 
                    <span className={toggle === true ? "displayContent" : "invi"}
                    >The point of using Lorem 
                    </span>
                    <p onClick={() => {
                        handleDisplay();
                    }} className="font-mono font-semibold cursor-pointer" id="readMore">Read More</p>
                    </p>
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
                    <img
                        onClick={handdleClicking}
                        className={`ml-5 w-9 cursor-pointer`}
                        src={ liked ? likedBlueIcon : likeIcon}
                        id="likeBtn"
                        alt="Like Button"
                        />
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