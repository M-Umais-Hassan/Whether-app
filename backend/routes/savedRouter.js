const router = require("express").Router();
const auth = require("../middleware/auth");
const { findOneAndDelete } = require("../models/savedModel");
const saveLocation = require("../models/savedModel");

router.post("/", auth, async (req, res) => {
    try {
        let {location, userId} = req.body;

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

router.delete("/delete/:loc", auth, async (req, res) => {
    const Loc = await saveLocation.findOneAndDelete({ userId: req.user, location: req.params.loc });
    res.json(Loc);    
});

module.exports = router;