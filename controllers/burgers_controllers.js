const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/api/burger", (req, res) => {
    
});

router.put("/api/burger/:id", (req, res) => {
    
});

module.exports = router;
