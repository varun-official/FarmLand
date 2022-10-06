import React, { useState } from "react";
import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import farmer2 from "../../assets/image/farmer2.png";
import { Container, Input, InputAdornment, IconButton, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "@mui/material";
// import { Alert } from "@mui/material";

export default function Login() {
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
    if(errorDisplay){
      setErrorDisplay(false)
    }
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleEmailChange = (prop) => (event) => {
    if(errorDisplay){
      setErrorDisplay(false)
    }
    setEmail(event.target.value );
  };

  const navigate = useNavigate();

  const Signup = () => {
    navigate("/signup");
  };

  const forgotpass = () => {
    navigate("/forgotpassword");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const [errorDisplay,setErrorDisplay]=useState(false)
  const { logIn, getCrop } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const a=await logIn(email, values.password);
      if(a!="success"){
        setError(a)
        setErrorDisplay(true)
        navigate("/login");

      }
      else{

        navigate("/CropInfo");
      }
      
    } catch (err) {
      // setError(err.message)
      
    }
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
                <h2 className="title">Log in</h2>
                {/* {error && <Alert variant="danger">{error}</Alert> } */}
                {
                  errorDisplay&&<Alert sx={{width:"380px",borderRadius:"55px"}} severity="error">
                 {error}
                </Alert>

                }
                
                <div className="input-field">
                  <div className="icon">
                    <FaUserAlt size={16} />
                  </div>
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Username"
                    onChange={handleEmailChange()}
                  />
                </div>
                <div className="input-field">
                  <div className="icon">
                    <AiFillLock size={16} />
                  </div>
                  <Input
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    disableUnderline
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="forgot-password" onClick={()=>forgotpass()}>
                  <p>Forgot password?</p>
                </div>
                <input
                  type="Submit"
                  value="Login"
                  className="btn solid" /*onClick={Cropinfo}*/
                />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Join the Technology Unifying,The Largest Community in
                  India-Farmers
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={Signup}
                >
                  Sign up
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
