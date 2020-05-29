const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = {
        burgers: await burger.all()
    };

    res.render("index", burgers);
});

router.post("/api/burger", (req, res) => {
    
});

router.put("/api/burger/:id", (req, res) => {
    
});

module.exports = router;
