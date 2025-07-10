import dotenv from "dotenv";
import { conectarDB } from "./config/connect";
import { globalUseApp } from "./helpers/use-routes";

require("dotenv").config();
dotenv.config();

conectarDB();
globalUseApp();
