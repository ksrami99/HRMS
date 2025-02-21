import  router  from "./routes/index";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
