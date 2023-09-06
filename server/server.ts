import { app } from "./app";
require("dotenv").config();

//listen server
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
