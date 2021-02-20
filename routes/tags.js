const express =  require("express")
const router =  express.Router()
const {createTag, updateTag, deleteTag} =  require("../controllers/tagsController")



router.route("/")
        .post(createTag)
        


router.route("/:id")        
        .delete(deleteTag)
        .put(updateTag)


module.exports = router