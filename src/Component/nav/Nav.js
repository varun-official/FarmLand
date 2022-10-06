import React, { useState } from "react";
import "./Navstyle.scss";
import { useNavigate } from "react-router";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { Icon } from "@iconify/react";
// import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { auth } from "../../config/firebase";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function Nav() {
  let location = useLocation().pathname;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, getCrop, logout, setUser } = useUserAuth();
  const Logout = async () => {
    await logout();
    await setUser(false);
    navigate("/login");
  };
  return (
    <div className="nav">
      <div className="navlogo">
        <h2>
          Farm<span>Land</span>
        </h2>
      </div>
      <div className="navlink">
        <div
          onClick={() => {
            getCrop();
            navigate("/CropInfo");
          }}
          className={location.match("/CropInfo") ? "navitemon" : "navitem"}
        >
          <h3>Home</h3> {location.match("/CropInfo") ? <hr /> : <div />}{" "}
        </div>
        <div
          onClick={() => {
            navigate("/cropmarket");
          }}
          className={location.match("/cropmarket") ? "navitemon" : "navitem"}
        >
          <h3>CropMarket</h3> {location.match("/cropmarket") ? <hr /> : <div />}
        </div>
        <div
          onClick={() => {
            navigate("/fertilizermarket");
          }}
          className={
            location.match("/fertilizermarket") ? "navitemon" : "navitem"
          }
        >
          <h3>FertilizerMarket</h3>{" "}
          {location.match("/fertilizermarket") ? <hr /> : <div />}
        </div>
        <div
          onClick={() => {
            navigate("/community");
          }}
          className={location.match("/community") ? "navitemon" : "navitem"}
        >
          <h3>Community</h3> {location.match("/community") ? <hr /> : <div />}
        </div>
        <div
          onClick={() => {
            navigate("/scheme");
          }}
          className={location.match("/scheme") ? "navitemon" : "navitem"}
        >
          <h3>Schemes</h3> {location.match("/scheme") ? <hr /> : <div />}
        </div>
        <div
          onClick={() => {
            navigate("/news");
          }}
          className={location.match("/news") ? "navitemon" : "navitem"}
        >
          <h3>Articles</h3> {location.match("/news") ? <hr /> : <div />}
        </div>
        <div
          onClick={() => {
            navigate("/image");
          }}
          className={location.match("/image") ? "navitemon" : "navitem"}
        >
          <h3>Detection</h3> {location.match("/image") ? <hr /> : <div />}
        </div>
      </div>

      <div className="searchbar">
        <LocationOnIcon sx={{ color: "#ffffff" }} />
        <h3>
          {user.city}, {user.location}
        </h3>
      </div>

      <div className="profile">
        <h3>{user.user_name}</h3>
        <div className="profileicon" onClick={() => setOpen(!open)}>
          <AccountCircleOutlinedIcon
            sx={{ fontSize: 40, color: "#fff", paddingLeft: 1 }}
          />
        </div>
        {open && (
          <div className="profiledrop">
            <div
              onClick={() => {
                navigate("/crowdsourcing");
              }}
            >
              {" "}
              <h3>Crowd Souring</h3>
            </div>
            <hr></hr>
            <div onClick={Logout}>
              <h3>LogOut</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
