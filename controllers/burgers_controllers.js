const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burger.all();
    res.render("index", {burgers: burgers});
});

router.post("/api/burger", (req, res) => {
    
});

router.put("/api/burger/:id", (req, res) => {
    
});

module.exports = router;
