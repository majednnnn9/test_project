const express = require("express")
const app = express()
const userRoutes = require('./routes/user_route');
const dotenv = require("dotenv")
dotenv.config();

// استخدام Route المستخدمين
app.use('/users', userRoutes);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log("runing is server is port " + PORT)
})