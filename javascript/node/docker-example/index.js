import express from "express";

const app = express();
const port = 3000;

app.use("/api/hello-world", (_req, res) => {
    res.send(JSON.stringify({ data: ["hello", "world"] }));
});

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});
