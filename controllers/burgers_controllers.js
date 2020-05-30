const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burger.all();
    res.render("index", { burgers: burgers });
});

router.post("/api/burgers", async (req, res) => {
    const burger_name = req.body.name;
    const result = await burger.insert(burger_name);
    res.json({ id: result.insertId });
});

router.put("/api/burgers/:id", (req, res) => {
    
});

module.exports = router;
