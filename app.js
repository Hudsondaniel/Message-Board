import express from "express";
import indexRouter from "./routes/index.js";

const app = express(); 
const port = 3030;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", indexRouter);
app.listen(port, () => { 
    console.log(`✅ Server running on http://localhost:${port}`);
});
