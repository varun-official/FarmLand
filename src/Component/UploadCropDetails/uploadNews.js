import React from "react";
import { Container } from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";

export default function UploadDetails() {
  const { addNews, getNews } = useUserAuth();
  //const [imageUpload,setImageUpload]=useState(null)
  const data = {
    title:
      "Govt revises wheat production estimate downwards to 105 mn tonnes for 2021-22 crop year",
    img_url:
      "https://img.etimg.com/thumb/msid-91314948,width-300,imgsize-297517,,resizemode-4,quality-100/agencies-.jpg",
    description: " ",
    link: " https://economictimes.indiatimes.com/news/economy/agriculture/govt-revises-wheat-production-estimate-downwards-to-105-mn-tonnes-for-2021-22-crop-year/articleshow/91314872.cms",
    content:
      " The government has revised downwards the estimate for wheat production by 5.7 per cent to 105 million tonnes in the 2021-22 crop year ending June from the earlier projection of 111.32 million tonnes, as the crop productivity has been affected due to the early onset of summer. Addressing a press conference, Food Secretary Sudhanshu Pandey said the agriculture ministry has revised the wheat production estimate downwards to 105 million tonnes for the 2021-22 crop year from 111.3 million tonnes earlier.",
  };

  const handleSubmit = (e) => {
    try {
      addNews(data);
      handledata();
    } catch (err) {}
    // console.log(imageUpload)
  };
  const handledata = (e) => {
    console.log("handle data");
    getNews();
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
