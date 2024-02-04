import ubuntoSpirit from "./images/Ubuntu.jpg";
import oral from "./images/Oral.jpg";
import respectElder from "./images/respect_elders.jpg";
import festivalCelebration from "./images/festival.png";

export const posts = [
  {
    id: 1,
    likeCount: 3,
    commentCount: 11,
    posterId: 1,
    title: "Ubuntu Spirit",
    imgUrl: ubuntoSpirit,
    content:
      "In the heart of Nigeria's cultural tapestry lies the Ubuntu spirit, a philosophy that emphasizes interconnectedness, compassion, and community. This value reflects the belief that one's humanity is tied to the well-being of others. In Nigeria, communities thrive on the principle of Ubuntu, fostering a sense of shared responsibility and mutual support. It permeates through daily interactions, celebrations, and challenges, creating a societal fabric tightly woven with empathy and unity. The Ubuntu spirit not only shapes interpersonal relationships but also forms the foundation of a resilient and collective identity, where the success and struggles of one are intimately linked to the prosperity and hardships of all.",
  },
  {
    id: 2,
    posterId: 1,
    likeCount: 3,
    commentCount: 11,
    title: "Oral Tradition",
    imgUrl: oral,
    content:
      "Nigeria's cultural richness is encapsulated in its vibrant oral tradition, where stories, myths, and histories are passed down through generations with an artistry that transcends time. Elders become living repositories of wisdom, narrating tales that connect the past with the present. This oral tradition is a living testament to Nigeria's diverse heritage, encapsulating the nuances of different ethnic groups. Through the rhythmic cadence of storytelling, values, moral lessons, and cultural pride are preserved, ensuring that the essence of Nigeria's history remains alive in the collective memory of its people.",
  },
  {
    id: 3,
    posterId: 1,
    likeCount: 21,
    commentCount: 67,
    title: "Respect for Elders",
    imgUrl: respectElder,
    content:
      "A cornerstone of Nigerian cultural values is the profound respect accorded to elders. Rooted in the wisdom and experiences of those who came before, this value is a guiding principle in Nigerian society. Elders are seen as repositories of knowledge, and their counsel is sought in matters ranging from personal decisions to community affairs. The respect for elders goes beyond familial ties, extending to community leaders and traditional authorities. It fosters a sense of continuity and stability, bridging the gap between generations and maintaining a harmonious balance between tradition and progress",
  },
  {
    id: 4,
    posterId: 1,
    likeCount: 90,
    commentCount: 32,
    title: "Festivals and Celebrations",
    imgUrl: festivalCelebration,
    content:
      "Nigeria's cultural vibrancy is manifested in its diverse festivals and celebrations, each reflecting the unique traditions of various ethnic groups. From the colorful and energetic Durbar festival in the north to the flamboyant and rhythmic Carnival in the south, these celebrations are a testament to the richness of Nigeria's cultural mosaic. Festivals serve as occasions for communal bonding, expressions of spirituality, and showcases of artistic prowess. They bring people together, transcending linguistic and regional boundaries, and offer a platform for the preservation and promotion of cultural values, ensuring that the spirit of celebration remains an integral part of Nigeria's identity",
  },
  {
    id: 5,
    likeCount: 3,
    commentCount: 11,
    posterId: 2,
    title: "Ubuntu Spirit",
    imgUrl: ubuntoSpirit,
    content:
      "In the heart of Nigeria's cultural tapestry lies the Ubuntu spirit, a philosophy that emphasizes interconnectedness, compassion, and community. This value reflects the belief that one's humanity is tied to the well-being of others. In Nigeria, communities thrive on the principle of Ubuntu, fostering a sense of shared responsibility and mutual support. It permeates through daily interactions, celebrations, and challenges, creating a societal fabric tightly woven with empathy and unity. The Ubuntu spirit not only shapes interpersonal relationships but also forms the foundation of a resilient and collective identity, where the success and struggles of one are intimately linked to the prosperity and hardships of all.",
  },
  {
    id: 6,
    posterId: 2,
    likeCount: 3,
    commentCount: 11,
    title: "Oral Tradition",
    imgUrl: oral,
    content:
      "Nigeria's cultural richness is encapsulated in its vibrant oral tradition, where stories, myths, and histories are passed down through generations with an artistry that transcends time. Elders become living repositories of wisdom, narrating tales that connect the past with the present. This oral tradition is a living testament to Nigeria's diverse heritage, encapsulating the nuances of different ethnic groups. Through the rhythmic cadence of storytelling, values, moral lessons, and cultural pride are preserved, ensuring that the essence of Nigeria's history remains alive in the collective memory of its people.",
  },
  {
    id: 7,
    posterId: 2,
    likeCount: 21,
    commentCount: 67,
    title: "Respect for Elders",
    imgUrl: respectElder,
    content:
      "A cornerstone of Nigerian cultural values is the profound respect accorded to elders. Rooted in the wisdom and experiences of those who came before, this value is a guiding principle in Nigerian society. Elders are seen as repositories of knowledge, and their counsel is sought in matters ranging from personal decisions to community affairs. The respect for elders goes beyond familial ties, extending to community leaders and traditional authorities. It fosters a sense of continuity and stability, bridging the gap between generations and maintaining a harmonious balance between tradition and progress",
  },
  {
    id: 8,
    posterId: 2,
    likeCount: 90,
    commentCount: 32,
    title: "Festivals and Celebrations",
    imgUrl: festivalCelebration,
    content:
      "Nigeria's cultural vibrancy is manifested in its diverse festivals and celebrations, each reflecting the unique traditions of various ethnic groups. From the colorful and energetic Durbar festival in the north to the flamboyant and rhythmic Carnival in the south, these celebrations are a testament to the richness of Nigeria's cultural mosaic. Festivals serve as occasions for communal bonding, expressions of spirituality, and showcases of artistic prowess. They bring people together, transcending linguistic and regional boundaries, and offer a platform for the preservation and promotion of cultural values, ensuring that the spirit of celebration remains an integral part of Nigeria's identity",
  },
];
// import React, { useState } from "react";
// import axios from "axios";
// import BlumaLogo from "../../LandingComponent/Button&Search/BlumaLogo";
//
// const Post = () => {
//   const [state, setState] = useState({
//     description: "",
//     content: "",
//     fileUrl: "",
//     userId: "106",
//     userAuthority: "user",
//     imgUpload: null,
//   });
//
//   const uploadImage = async () => {
//     const { imgUpload } = state;
//
//     if (!imgUpload) {
//       console.error("Please select an image");
//       return;
//     }
//
//     const formData = new FormData();
//     formData.append("file", imgUpload);
//     formData.append("upload_preset", "myCloud");
//
//     try {
//       const response = await axios.post(
//           "https://api.cloudinary.com/v1/duc8kpcl9/image/upload",
//           formData
//       );
//
//       const fileUrl = response.data.url;
//       setState((prev) => ({ ...prev, fileUrl }));
//       console.log(fileUrl);
//     } catch (error) {
//       console.error("Cloudinary Upload Error:", error);
//     }
//   };
//
//   const post = async () => {
//     const { description, content, fileUrl, userAuthority, userId } = state;
//
//     try {
//       const response = await axios.post(
//           "http://localhost:8080/api/v1/post/post",
//           {
//             description,
//             content,
//             imageUrl: fileUrl,
//             authority: userAuthority,
//             userId,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//               "Content-Type": "application/json",
//             },
//           }
//       );
//
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//
//   const handleInputChange = (e, field) => {
//     setState((prev) => ({ ...prev, [field]: e.target.value }));
//   };
//
//   return (
//       <div className="user-post">
//         {/* ... (unchanged code) */}
//         <div className="container">
//           <h1 font-size={"bold"}>Create Post</h1>
//           <input
//               type="text"
//               placeholder="Enter title"
//               className="title-input"
//               value={state.description}
//               onChange={(e) => handleInputChange(e, "description")}
//           />
//           <br />
//           <label htmlFor="post">Write post</label>
//           <textarea
//               name="post"
//               id=""
//               cols="30"
//               rows="10"
//               value={state.content}
//               onChange={(e) => handleInputChange(e, "content")}
//           ></textarea>
//           <input
//               type="file"
//               className="image"
//               onChange={(e) => setState((prev) => ({ ...prev, imgUpload: e.target.files[0] }))}
//           />
//         </div>
//         <button className="create-post" onClick={post}>
//           post
//         </button>
//       </div>
//   );
// };
//
// export default Post;
