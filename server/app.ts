import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

//body parse
app.use(express.json({ limit: "50mb" }));
