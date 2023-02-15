const express = require("express");
const  cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 2023);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({msg: "Welcome"});
});
app.post("/", (req, res) => {
    const {name} =req.body;
    res.send(`Added! ${name}`);
});

app.put("/", (req, res) => {
    res.json({msg: "Updated"});
});
app.delete("/", (req, res) => {
    res.json({msg: "Deleted"});
});

app.listen(app.get("port"), () => {
    console.log(`listening for calls on port ${app.get("port")}`);
    console.log("Press Crtl+C to exit server");
});
