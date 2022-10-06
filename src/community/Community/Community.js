/** @format */

import React, { useEffect, useState } from "react";
import "./Community.css";
import Sidebar from "../Sidebar";
import Chat from "../Chat";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Component/nav/Nav";

function Community() {
  const dispatch = useDispatch();
  const user = {
    uid: "1",
    photo: "https://www.flaticon.com/free-icon/user-picture_21104",
    email: "sakshamg1304@gmail.com",
    displayName: "Saksham",
  };

  //   useEffect(()=>{
  //     auth.onAuthStateChanged((authUser)=>{
  //       if(authUser){
  //        //user is loged in
  //        dispatch(login({
  //          uid:authUser.uid,
  //          photo:authUser.photoURL,
  //          email:authUser. email,
  //          displayName:authUser.displayName
  //        }))
  //       }else{
  // //user is loged out
  // dispatch(logout());
  //       }
  //     })
  //   },[dispatch])
  return (
    <div>
      <Nav />
      <div className="app">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Community;
