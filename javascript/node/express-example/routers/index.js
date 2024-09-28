import os from "os";
import express from "express";

const router = express.Router();

function getIpAddress() {
    // get network interfaces
    const networkInterfaces = os.networkInterfaces();
    
    for (const networkInterface in networkInterfaces) {
        const networkAddresses = networkInterfaces[networkInterface];

        for (const networkAddress of networkAddresses) {
            // find first ipv4 non loopback address
            if (networkAddress.family === "IPv4" && !networkAddress.internal) {
                return networkAddress.address;
            }
        }
    }
};

router.get("/hello-world", (_req, res) => {
    res.send(JSON.stringify({ data: "Hello, World!" }));
});

router.get("/ip-address", (_req, res) => {
    res.send(JSON.stringify({ data: getIpAddress() }));
});

export default router;
