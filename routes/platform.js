const express = require("express")
const router = express.Router()
const { createPlatform, updatePlatform, deletePlatform } = require("../controllers/platformsController")



router.route("/")
    .post(createPlatform)



router.route("/:id")
    .delete(deletePlatform)
    .put(updatePlatform)


module.exports = router