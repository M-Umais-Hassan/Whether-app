const router = require("express").Router();
const auth = require("../middleware/auth");
const saveLocation = require("../models/savedModel");

router.post("/", auth, async (req, res) => {
    try {
        let {location, userId} = req.body;

        //validation
        if(!location) {
            return res.status(400).json({msg: "Not all fields have been entered"});
        }
        const newLoc = new saveLocation({
            location,
            userId: req.user
        });
        const savedLoc = await newLoc.save();
        res.json(savedLoc);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/all", auth, async (req, res) => {
    const Location = await saveLocation.find({ userId: req.user });
    res.json(Location);
});

router.delete("/:id", auth, async (req, res) => {
    const Loc = await saveLocation.findOne({ userId: req.user, _id: req.params.id });
    if (!Loc) {
        return res.status(400).json({msg: "With this id there is no Loc present for current logged in user"});
    }    
    const deleteLoc = await saveLocation.findByIdAndDelete(req.params.id);
    res.json(deleteLoc);
});

module.exports = router;