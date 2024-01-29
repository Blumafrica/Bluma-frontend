import Axios from "axios";
import { useState } from "react";
import BlumaLogo from "../LandingComponent/Button&Search/BlumaLogo";
import styled from "styled-components";

const Title = styled.input`
  border: 1px solid gray;
`;
const Wrapper = styled.div``;
const Content = styled.input`
  border: 1px solid gray;
`;
export default function PostArticlePage() {
  const [imgUpload, setImgUpload] = useState(null);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  function uploadImage() {
    if (!imgUpload) {
      console.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("file", imgUpload);
    formData.append("upload_preset", "myCloud");
    const response = Axios.post(
      "https://api.cloudinary.com/v1_1/duc8kpcl9/image/upload",
      formData
    ).then((res) => console.log(res.data.url));
  }

  return (
    <div className="upload-info">
      <nav>
        <BlumaLogo />{" "}
      </nav>
      <Wrapper>
        <Title
          placeholder="Title"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Content
          placeholder="Content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(event) => {
            setImgUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Submit</button>
      </Wrapper>
    </div>
  );
}
