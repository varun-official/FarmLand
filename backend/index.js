/** @format */

require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");
// const categoryRoutes = require("./routes/category");
// const productRoutes = require("./routes/product");
// const orderRoutes = require("./routes/order");

const dbConnect = async() =>{
    try {
        await mongoose
        .connect(process.env.MONGODBURL, {
          // useNewUrlParser: true,
          useUnifiedTopology: true,
          // useCreateIndex: true
        })
        console.log("DB CONNECTED");
    } catch (error) {
       console.error("Mongo db connection error::",error.message); 
    }
}

//DB Connection
dbConnect()

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api", categoryRoutes);
// app.use("/api", productRoutes);
// app.use("/api", orderRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});