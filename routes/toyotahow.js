const router = require("express").Router();
const upload = require("../middleware/uploadHow");
var toyotahowController = require("../modules/toyotahow/controllers/toyotahowController.js");
const authMiddleware = require("../modules/auth/middlewares/authMiddleware");

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

router.get("/", [authMiddleware.verifyToken], toyotahowController.index);
router.get("/detail/:id", [authMiddleware.verifyToken], toyotahowController.indexdetail);
router.get("/input", [authMiddleware.verifyToken], toyotahowController.input);
router.post("/adddata", [authMiddleware.verifyToken], upload.fields([{
                name: 'sampul_how', maxCount: 1
            }, {
                name: 'location_how', maxCount: 1
            }]), toyotahowController.createData);
router.post("/updatedatasampul", [authMiddleware.verifyToken], upload.single('sampul_how'), toyotahowController.updateDataSampul);
router.get("/delete/:id", [authMiddleware.verifyToken], toyotahowController.hapusData);
router.get("/edit/:id", [authMiddleware.verifyToken], toyotahowController.editData);
router.post("/edit/save/:id", [authMiddleware.verifyToken], toyotahowController.updateData);
router.get("/pdf", [authMiddleware.verifyToken], toyotahowController.pdf);
router.get("*", toyotahowController.notFound);

module.exports = router;
