import React from "react";
import pen from "../assets/pen 1.svg";
import "./addarticle.css"
import { useNavigate } from "react-router-dom";

function AddArticleBtn() {
  const navigate = useNavigate()
  function goToAddPost(){
    navigate("/PostArticle")
  }
  return (
    <div className="add-article">
      <button onClick={goToAddPost}>
        <img src={pen} alt="" style={{ display: "block" }} />
        <span style={{ display: "block" }}>Add article</span>
      </button>
    </div>
  );
}

export default AddArticleBtn;
