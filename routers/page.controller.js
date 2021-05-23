const express = require("express");
const home = require("../json/home.json");
const commands = require("../json/commands.json");
const cards = require("../json/features.json");
const router = express.Router();

router.get("/", async (request, response) => {
    response.status(200).render("home", {
        homeconfig: home,
        cards: cards.list,
        root: "./views/"
    });
});

router.get("/commands", (request, response) => {
    response.status(200).render("commands", {
        commands: commands.categorys,
        root: "./views/"
    })
});

module.exports = router;