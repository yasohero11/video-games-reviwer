const express =  require("express")
const router =  express.Router()
const {createType, updateType, deleteType} =  require("../controllers/typeController")



router.route("/")
        .post(createType)
        


router.route("/:id")        
        .delete(deleteType)
        .put(updateType)


module.exports = router