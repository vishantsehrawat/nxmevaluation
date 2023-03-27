const express = require("express")

const postRouter = express();
postRouter.use(express.json());


module.exports = postRouter
