const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: "./assets/uploads",
    filename: function (req, file, cb) {

        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }

})

function valdiateFile(file, cb) {
    let allowedTypes = /jpeg|jpg|png|gif/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else
        cb("error:images Only")
}

const upload = multer(
    {
        storage: storage,
        fileFilter: function (req, file, cb) {
            valdiateFile(file, cb)
        }      
    }
).single('inpFile')



module.exports =  upload