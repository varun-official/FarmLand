const User = require("../models/user");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
// var expressJwt = require("express-jwt");

exports.signup = async(req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const user = new User(req.body);

  try {
    const createdUser = await user.save();
    res.json({
        name: createdUser.name,
        email: createdUser.email,
        id: createdUser._id
      });
  } catch (error) {
    return res.status(400).json({
        err: "NOT able to save user in DB"
      });
  }
};

exports.signin = async(req, res) => {
  const errors = validationResult(req);
  try {

  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }
    const userInDb = await User.findOne({ email });
    if(!userInDb){
        return res.status(400).json({
            error: "USER email does not exists"
          });
    }
    if (!userInDb.autheticate(password)) {
        return res.status(401).json({
          error: "Email and password do not match"
        });
      }
    //create token
    const token = jwt.sign({ _id: userInDb._id }, process.env.SECRET);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    const data={
        name:userInDb.name,
        email:userInDb.email,
        role:userInDb.role,
        id:userInDb._id
    }
    
    //send response to front end
    return res.json({ token, user:data  });
  } catch (error) {
    return res.status(400).json({
        err: error.message
      });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};

//protected routes
// exports.isSignedIn = expressJwt({
//   secret: process.env.SECRET,
//   userProperty: "auth"
// });

// //custom middlewares
// exports.isAuthenticated = (req, res, next) => {
//   let checker = req.profile && req.auth && req.profile._id == req.auth._id;
//   if (!checker) {
//     return res.status(403).json({
//       error: "ACCESS DENIED"
//     });
//   }
//   next();
// };

// exports.isAdmin = (req, res, next) => {
//   if (req.profile.role === 0) {
//     return res.status(403).json({
//       error: "You are not ADMIN, Access denied"
//     });
//   }
//   next();
// };