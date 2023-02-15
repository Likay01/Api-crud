const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try{
        con.query("SELECT * FROM Users", (err, result) => {
            if (err) throw err;
            res.send(result);  
});
    }  catch (error) {
        console.log(error);
        res.status(400).send(error)
    }  
});
router.post = ("/submit", (req, res) => {
            res.send("POST Request");  
});

router.put("/", (req, res) => {
    try{
        con.query("UPDATE Users SET ? WHERE ?", (err, result) => {
            if (err) throw err;
            res.send(result);  
});
    }  catch (error) {
        console.log(error);
        res.status(400).send(error)
    }  
});
router.delete("/", (req, res) => {
    try{
        con.query("DELETE FROM Users WHERE ?", (err, result) => {
            if (err) throw err;
            res.send(result);  
});
    }  catch (error) {
        console.log(error);
        res.status(400).send(error)
    }  
});


module.exports = router;