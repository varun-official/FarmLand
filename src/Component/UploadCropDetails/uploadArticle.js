import React from "react";
import { Container } from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";

export default function UploadDetails() {
  const { addArticle, getArticle } = useUserAuth();
  //const [imageUpload,setImageUpload]=useState(null)
  const data = {
    title: "Agricultural Marketing in India",
    img_url: "",
    description: " ",
    link: "https://www.indiastudychannel.com/resources/163269-Agricultural-Marketing-in-India-Process-of-Agriculture-and-Marketing.aspx",
    content:
      "Agricultural marketing is one of the part of marketing, Agriculture is a life for majority of Indian people and it contributes 25 percentage of GDP. Most agricultural commodity markets generally operate under the normal forces of demand and supply. To encourage farmers', Government should protect their interest and even fix minimum interest price for their crops.",
  };

  const handleSubmit = (e) => {
    try {
      addArticle(data);
      handledata();
    } catch (err) {}
    // console.log(imageUpload)
  };
  const handledata = (e) => {
    console.log("handle data");
    getArticle();
  };

  return (
    <Container>
      <div>
        {/* <input type="file" onChange={(event)=>{
                        setImageUpload(event.target.files[0]);
                    }}
                    /> */}
        <button onClick={handleSubmit}>upload</button>
      </div>
    </Container>
  );
}
