import React, { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import fpng from "../../assets/image/fpng.png";
import {
  Container,
  Input,
  InputAdornment,
  IconButton,
  Snackbar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useUserAuth } from "../../context/UserAuthContext";

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    user_name: "",
    phoneNo: "",
    email: "",
    password: "",
    pincode: "",
  };
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [values, setValues] = useState({ password: "", showPassword: false });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signUp, addUser } = useUserAuth();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    formValues.password = event.target.value;
  };

  const handleChange = (e) => {
    if (errorDisplay) {
      setErrorDisplay(false);
    }
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      if(isSubmit){
        try {
          const res = await signUp(formValues);
          if (!res?.id) {
            setErrorDisplay(true);
          } else {
            addUser(formValues);
            navigate("/CropInfo");
          }
        } catch (err) {
          console.error(err);
        }
      }
    } else {
      setErrorMessage(Object.values(errors).join(" | "));
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Additional logic after successful validation
      setIsSubmit(true);

    }
  }, [formErrors]);

  const validatePincode = async (pincode) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = response.data[0];
      if (data.Status === "Error" || data.PostOffice === null) {
        return "Invalid pincode!";
      }else{
        formValues.district = data.PostOffice[0]?.District;
        formValues.region = data.PostOffice[0]?.Region;
        formValues.state = data.PostOffice[0]?.State;

      }
    } catch (error) {
      console.error("Error validating pincode:", error);
      return "Error validating pincode!";
    }
    return null;
  };

  const validate = async (values) => {
    const errors = {};
    if (!values.user_name) {
      errors.user_name = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (
      !values.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.email = "Email is not valid";
    }
    if (!values.pincode) {
      errors.pincode = "Pincode is required!";
    } else {
      const pincodeError = await validatePincode(values.pincode);
      if (pincodeError) errors.pincode = pincodeError;
    }

    return errors;
  };

  return (
    <Container>
      <div className="container">
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                We are Helping Farmers produce their products and providing 24/7
                guidance.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </div>
            <img src={fpng} className="image" alt="fpng" />
          </div>
        </div>

        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="/signup"
              method="POST"
              className="sign-in-form"
              onSubmit={handleSubmit}
            >
              <h2 className="title">Sign up</h2>
              
              <div className="input-field">
                <div className="icon">
                  <FaUserAlt size={16} />
                </div>
                <input
                  type="text"
                  value={formValues.user_name}
                  name="user_name"
                  placeholder="Full name"
                  onChange={handleChange}
                />
              </div>
              
              <div className="input-field">
                <div className="icon">
                  <MdEmail size={19} />
                </div>
                <input
                  type="text"
                  value={formValues.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              
              <div className="input-field">
                <div className="icon">
                  <BsFillTelephoneFill size={16} />
                </div>
                <input
                  type="tel"
                  value={formValues.phoneNo}
                  name="phoneNo"
                  placeholder="Phone number"
                  onChange={handleChange}
                />
              </div>
              
              <div className="input-field">
                <div className="icon">
                  <AiFillLock size={19} />
                </div>
                <Input
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  placeholder="Password"
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
              
              <div className="input-field">
                <div className="icon">
                  <MdLocationPin size={19} />
                </div>
                <input
                  type="text"
                  name="pincode"
                  value={formValues.pincode}
                  placeholder="Enter your pincode"
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent form submission
                      setFormErrors(validate(formValues));
                    }
                  }}
                />
              </div>

              <input
                type="submit"
                className="btn"
                value="Sign up"
              />
            </form>
          </div>
        </div>
      </div>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ color: 'white', fontWeight: 'bold' }}
      />
    </Container>
  );
}
