import express from "express";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = 3000;

const { Client } = pg;
const client = new Client({
    connectionString: process.env.POSTGRESQL_URL
});

app.use("/api/hello-world", (_req, res) => {
    res.send(JSON.stringify({ data: "Hello, World!" }));
});

app.use("/api/now", async (_req, res) => {
    // connect to postgresql database
    await client.connect();

    const result = await client.query("SELECT NOW()");

    // disconnect from postgresql database
    await client.end();

    const now = result.rows[0].now;
    res.send(JSON.stringify({ data: now }));
});

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});
