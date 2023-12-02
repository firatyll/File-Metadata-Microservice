
exports.getHome = (req, res) => {
    res.render("index");
}


exports.analyseFile = (req, res) => {
    res.json({
        name:req.file.originalname,
        type:req.file.mimetype,
        size:req.file.size
    })
};
