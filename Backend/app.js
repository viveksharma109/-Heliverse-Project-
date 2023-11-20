const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require("./db/index");
const userRouter = require("./Routes/user routes/index");
const teamRouter = require("./Routes/Team/index");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDb();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(teamRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
