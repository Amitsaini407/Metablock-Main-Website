const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const categoryRouter = require('./routes/categoryRouter');
const blogcategoryRouter = require('./routes/blogCategoryRouter');
const teamRouter = require('./routes/teamRouter'); // Adjust path as per your project structure
const galleryRouter = require("./routes/galleryRouter");
const videoRouter = require("./routes/videoRouter");
const cookieParser = require('cookie-parser');
const path = require('path');
const blogRouter = require('./routes/blogRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Mounting teamRouter
app.use('/api/v1/category',categoryRouter); // Ensure correct path here
app.use('/api/v1/blogcategory',blogcategoryRouter); // Ensure correct path here
app.use('/api/v1/blog',blogRouter); // Ensure correct path here
app.use('/api/v1/team', teamRouter); // Ensure correct path here
app.use('/api/v1/gallery', galleryRouter ); // Ensure correct path here
app.use('/api/v1/video', videoRouter ); // Ensure correct path here

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to DB");
    console.log(`Server is running on port ${PORT}`);
  });
});
