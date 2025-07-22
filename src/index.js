import express from "express";
import { join, __dirname } from "../src/utils/index.js";
import productRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/users.routes.js";
import { envs } from "./config/envs.js";
import authtentication from "./middlewares/auth.middleware.js";
//config
const app = express();
app.set("PORT", envs.PORT);
console.log(envs);
console.log(process.env.PORT);


//middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => res.send("Home Talento tech!"));
app.use("auth", authroutes);
app.use("/api/products",authtentication, productRoutes);
app.use("/api/users", userRoutes);


//server listening
app.listen(app.get("PORT"), () => {
    console.log(`Server running on port http://localhost:${app.get("PORT")}`);
});
