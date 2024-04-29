const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
app.use(cors())
app.use(express.json());

const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})



//55:00
// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/change-password
// /api/v1/accounts/transfer-money
// /api/v1/accounts/get-balance
