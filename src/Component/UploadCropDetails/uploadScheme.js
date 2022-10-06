import React from "react";
import { Container } from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState } from "react";

export default function UploadDetails() {
  const { addScheme, getScheme } = useUserAuth();
  //const [imageUpload,setImageUpload]=useState(null)
  const data = {
    type: "Kerala Government",
    title: "Development of paddy cultivation",
    img_url: "",
    description: " ",
    link: "http://keralaagriculture.gov.in/2018/12/27/%e0%b4%a8%e0%b5%86%e0%b4%b2%e0%b5%8d%e2%80%8d%e0%b4%95%e0%b5%83%e0%b4%b7%e0%b4%bf-%e0%b4%b5%e0%b4%bf%e0%b4%95%e0%b4%b8%e0%b4%a8%e0%b4%82/",
    content:
      "he main emphasis is on implementing paddy cultivation development programmes with emphasis on fallow cultivation and group-based activities focusing on areas which fall under 7 specific agricultural areas in the state which are naturally conducive for paddy cultivation and have potential for increase in production. the target of increasing the area under paddy cultivation to 3 lakh hectares is targeted to be achieved by the end of the 13th plan. an amount of rs.87.65 crore has been allocated for this purpose in 2018-19.",
  };

  const handleSubmit = (e) => {
    try {
      addScheme(data);
      handledata();
    } catch (err) {}
    // console.log(imageUpload)
  };
  const handledata = (e) => {
    console.log("handle data");
    getScheme();
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
