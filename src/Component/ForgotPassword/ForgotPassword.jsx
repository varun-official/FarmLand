import React, { useState } from "react";
import "./ForgotPassword.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import farmer2 from "../../assets/image/farmer2.png";
import { Container, Input, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import {auth} from "../../config/firebase"
import {sendPasswordResetEmail} from "firebase/auth"
// import { Alert } from "@mui/material";

export default function ForgotPassword() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const navigate = useNavigate();

  const Signup = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState("");
  const { logIn, getCrop } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(()=>{
      navigate("/login");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  

  };
  return (
    <Container>
      <div className="parent">
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                action="/login"
                method="POST"
                className="sign-in-form"
                name="myLoginForm"
                onSubmit={handleSubmit}
              >
                <h2 className="title">Forgot Password</h2>
                {/* {error && <Alert variant="danger">{error}</Alert> } */}
                <div className="input-field">
                  <div className="icon">
                  <MdEmail size={16} />

                  </div>
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="Submit"
                  value="Reset Password"
                  className="btn solid" /*onClick={Cropinfo}*/
                />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Already Have Account ?</h3>
                <p>
                  Join the Technology Unifying,The Largest Community in
                  India-Farmers
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={Signup}
                >
                Login
                </button>
              </div>
              <img src={farmer2} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
