import Header from "../layout/header";
import React, { useState } from "react";
export default function PostArticlePage(){

    const [imageSrc, setImageSrc] = useState("");
    const [caption, setCaption] = useState("");
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImageSrc(URL.createObjectURL(file));
    };
  
    const handlePost = async () => {
      try {
        const formData = new FormData();
        formData.append("image", document.getElementById("file").files[0]);
        formData.append("caption", caption);
  
        const response = await fetch("http://localhost:8080/api/v1/post/post", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          console.log("Post created successfully");
          // Additional logic if needed
        } else {
          console.error("Failed to create post:", await response.text());
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    };

    return(
        <>
        <Header />
        <div className="flex justify-center">
            <div className="xl:w-3/5 h-80">
                <div>
                <div className="flex justify-center mt-3">
                    <div className="cursor-pointer">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><g fill="none" stroke="purple" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"/></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"/></path></g></svg> */}
                        <img className="h-72 w-96" src={imageSrc}  alt="Uploaded Image"></img>
                        <input className="text-xl font-mono p-3 m-3" 
                        type="file" 
                        id="file"
                        onChange={handleImageChange}
                        ></input>
                    </div>
                </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-10/12">
                        <div className="flex justify-center">
                            <input className="m-3 p-5 xl:w-3/5 bg-transparent border-2 border-slate-400" 
                            type="text" 
                            placeholder="Write your Caption"
                            value={caption}
                            onChange={(event) => setCaption(event.target.value)}></input>
                        </div>
                        <div className="flex justify-end">
                            <p className="sm:text-xl sm:p-2 font-mono xl:text-3xl xl:p-2 text-white cursor-pointer bg-purple-500 w-40 text-center m-3"
                            onClick={handlePost}
                            >Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}