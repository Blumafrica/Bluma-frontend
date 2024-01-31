import Axios from "axios";
import { useState } from "react";
import BlumaLogo from "../LandingComponent/Button&Search/BlumaLogo";
import styled from "styled-components";

// const Title = styled.input`
//   border: 1px solid gray;
//   display: block;
// `;
//
// const Wrapper = styled.div`
//   display: block;
// `;
//
// const Content = styled.input`
//   border: 1px solid gray;
// `;
//
// const SubmitButton = styled.button`
//   /* Add your button styling here */
// `;
//
// export default function PostArticlePage() {
//
//     return (
//         <div className="upload-info">
//             <nav>
//                 <BlumaLogo />
//             </nav>
//             <Wrapper>
//                 <Title
//                     placeholder="Title"
//                     value={description}
//                     required
//                     // onChange={(e) => handleInputChange(e, setDescription)}
//                 />
//                 <Content
//                     placeholder="Content"
//                     value={content}
//                     required
//                     // onChange={(e) => handleInputChange(e, setContent)}
//                 />
//                 {/*<input*/}
//                 {/*    type="file"*/}
//                 {/*    name="image"*/}
//                 {/*    onChange={(event) => {*/}
//                 {/*        setImgUpload(event.target.files[0]);*/}
//                 {/*    }*/}
//                 {/*}*/}
//                 {/*/>*/}
//                 {/*<SubmitButton onClick={uploadImage}>Submit</SubmitButton>*/}
//             </Wrapper>
//         </div>
//     );
// }
