const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const upload = require("../middlewares/upload");

router.get("/" , fileController.getHome);
router.post("/api/fileanalyse", upload.single("upfile"), fileController.analyseFile);

module.exports = router;