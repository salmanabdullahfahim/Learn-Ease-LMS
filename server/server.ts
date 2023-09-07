import { app } from "./app";
import dbConnect from "./utils/db";
require("dotenv").config();

//listen server
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
  dbConnect();
});
