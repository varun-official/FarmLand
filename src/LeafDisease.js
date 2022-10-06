import React, { useState } from "react";
import { Form } from "react-bootstrap";
import backendapi from "./backendapi";
import Nav from "./Component/nav/Nav";
import "./LeafDisease.scss";
import { Button } from "@mui/material";
import unavailable2 from "./assets/image/unavailable2.png";
import { Icon } from '@iconify/react'
import CarouselList from "./Component/Carousel/Carousel";
import test from './assets/image/test.jpg'
import accurate from './assets/image/accurate.jpg'
import result_res from './assets/image/result.jpg'
function LeafDisease() {
  const [state, setState] = useState({
    file: "",
    fileObj: "",
    filename: "",
    formSuccess: false,
    deleteSuccess: false,
  });

  const [result, setResult] = useState("");

  const onFileUpload = (event) => {
    // setResult("");
    setState({
      ...state,
      file: URL.createObjectURL(event.target.files[0]),
      fileObj: event.target.files[0],
      formSuccess: false,
    });
  };

  const uploadFile = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("file", state.fileObj);
    console.log(formData);
    backendapi({
      method: "post",
      url: "/predict",
      data: formData,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        setResult(res.data.result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav />
      <div className='markettopfer'>
        <div className='carousel'>
        <CarouselList type={""}/>
        </div>

        <div className='banner'>
          <div className='eachbanner'>
            <img style={{opacity:"0.7"}} src={test} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"50px",left:"30px"}}>
              <p>Test the disease realtime</p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={accurate} alt="" />
            <div className='text-block' style={{position:"absolute",top:"50px",right:"30px"}}>
              <p>Accurate testing </p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={result_res} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"40px",left:"30px"}}>
              <p>Realtime result</p>
            </div>
          </div>
        </div>
      </div>
      <div className="disease_main">
        <div className="center">
          <h1 className="Upload__Heading">TEST YOUR PLANT</h1>
          <img className="Img__upload" src={state.file} alt="" />
        </div>

        <Form onSubmit={uploadFile} id="fileupload">
          <input
            className="fileuploadbtn"
            id="file"
            type="file"
            accept="image/*;capture=camera"
            name="file"
            required="required"
            onChange={onFileUpload}
          />
          <label for="file"> <Icon icon="ic:baseline-add-a-photo" width="24" height="24" /> &nbsp; Choose a Photo</label>
          <button className="predict_btn" type="submit">
            TEST
          </button>
        </Form>
        {result ? (
          <div
            dangerouslySetInnerHTML={{ __html: result }}
            className="result"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LeafDisease;
