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

router.put("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await burger.update(id);
    res.status(200).end();
});

router.delete("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await burger.delete(id);
    res.status(200).end();
});

module.exports = router;
