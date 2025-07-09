import dotenv from "dotenv";
import { conectarDB } from "./config/connect";

require("dotenv").config();
dotenv.config();

conectarDB();
