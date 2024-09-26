import express from "express";

const router = express.Router();

router.get("/hello-world", (_req, res) => {
    res.send(JSON.stringify({ data: "Hello, World!" }));
});

export default router;
