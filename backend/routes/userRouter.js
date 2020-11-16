const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const auth = require('../middleware/auth');

router.post("/register", async(req, res) => {
    try {
        let {email, password, passwordCheck, displayName} = req.body;

        //validations
        if(!email || !password || !passwordCheck)
            return res.status(400).json({msg: "Not all fields have been entered"});
        if(password.length < 5) 
            return res.status(400).json({msg: "Password should contain atleast five characters"});
        if(password != passwordCheck) 
            return res.status(400).json({msg: "Password and confirm password not mached"});
        const existingUser = await User.findOne({email: email});
        if(existingUser)
            return res.status(400).json({msg: "This email is alerady registered"});
        if(!displayName) 
            displayName = email;
        
        //hashing password for security purpose
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //creating new user with his email, password, displayName
        const newUser = new User ({
            email, 
            password: passwordHash,
            displayName
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
        
    } catch (err) {
        //500 = internal serever error
        res.status(500).json({error: err.message});
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        //validations
        if(!email || !password) 
            return res.status(400).json({ msg: "Not all fields have been entered"});
    
        const user = await User.findOne({email: email});
        if(!user) 
            return res.status(400).json({msg: "Email not exist"});
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) 
            return res.status(400).json({msg: "Invalid cedentials"});
        
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete", auth, async (req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.user);
        res.json(deleteUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) 
            return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) 
            return res.json(false);
        
        const user = await User.findById(verified.id);
        if(!user)
            return res.json(false);

        return res.json(true);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
    }); 
});

module.exports = router;