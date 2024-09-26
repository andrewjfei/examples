import express from "express";
import router from "./routers/index.js";

const app = express();
const port = 3000;

app.use("/api", router);

app.listen(port, () => {
    console.log(`express listening on localhost:${port}`);
});
