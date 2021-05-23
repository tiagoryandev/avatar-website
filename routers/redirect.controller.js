const express = require("express");
const { links } = require("../json/home.json");
const router = express.Router();

router.get("/add", (request, response) => {
    response.redirect(links.inviteBot);
});

router.get("/discord", (request, response) => {
    response.redirect(links.discord);
});

router.get("/twitter", (request, response) => {
    response.redirect(links.twitter);
});

module.exports = router;