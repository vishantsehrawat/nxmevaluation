const express = require("express")
const { PostModel } = require("../model/post.model");

const postRouter = express();
postRouter.use(express.json());

// add new post
postRouter.post("/add", async (req, res) => {
    const postData = req.body;
    try {
        const post = new PostModel(postData)
        await post.save();
        console.log(post);

        res.status(200).send({ msg: "new post added " })
    }
    
    catch (error) {
        res.status(400).send({ msg: "not able to add new post" })
        console.log(error);
    }
})

// show post of particula user
postRouter.get("/posts", async (req, res) => {
    const id = req.body.userId;
    try {
        const post = await PostModel.find({userId:id})
        console.log(post);

        res.status(200).send({ msg: "post found ",data:post })
    }
    
    catch (error) {
        res.status(400).send({ msg: "post not found" })
        console.log(error);
    }
})

// delete post 

postRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findByIdAndDelete({id})
        console.log(post);

        res.status(200).send({ msg: "post deleted ",data:post })
    }
    
    catch (error) {
        res.status(400).send({ msg: "post not deleted" })
        console.log(error);
    }
})

// update post 

postRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body
    try {
        const post = await PostModel.findByIdAndUpdate(id,{userUpdate})
        console.log(post);

        res.status(200).send({ msg: "post updated " })
    }
    
    catch (error) {
        res.status(400).send({ msg: "unable to update post" })
        console.log(error);
    }
})


module.exports = postRouter
