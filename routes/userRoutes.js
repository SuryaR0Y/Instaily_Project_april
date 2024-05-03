const express = require('express')
const router = express.Router();

const db = require("../models");
const  {user}  = require("../models");

const {createTokens, validateToken} = require('../jwt');
const bcrypt = require('bcrypt');

router.post("/register", (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        user.create({
        username: username,
        password: hash,
      })
        .then(() => {
          res.json("USER REGISTERED");
        })
        .catch((err) => {
          if (err) {
            res.status(400).json({ error: err });
          }
        });
    });
  });
  
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const ourUser = await user.findOne({ where: { username: username } });
  
    if (!ourUser) res.status(400).json({ error: "User Doesn't Exist" });
  
    const dbPassword = ourUser.password;
    bcrypt.compare(password, dbPassword).then((match) => {
      if (!match) {
        res
          .status(400)
          .json({ error: "Wrong Username and Password Combination!" });
      } else {
        const accessToken = createTokens(user);
  
        res.cookie("access-token", accessToken, {
          maxAge: 300000,
          httpOnly: true,
        });
  
        res.json("LOGGED IN");
      }
    });
  });
  
  router.get("/profile", validateToken, (req, res) => {
    res.json("profile");
  });
  

module.exports = router;