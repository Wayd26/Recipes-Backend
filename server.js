const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
const dotenv = require("dotenv")

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.info("Database connected successfully")
}).catch((error) => {
    console.log("Something went wrong ", error)
})

app.use(cors())

app.use(bodyParser.json())

app.use(express.json());
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Recipes APIs" })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server connected successfully on port ${PORT}`)
})