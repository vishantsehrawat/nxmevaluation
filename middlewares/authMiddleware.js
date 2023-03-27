var jwt = require('jsonwebtoken');


const authMiddleware =(req,res,next)=>{
    const token = req.headers.authorization;
    console.log("🚀 ~ file: authMiddleware.js:6 ~ authMiddleware ~ token:", token);

    var decoded = jwt.verify(token, 'masai');
    if(decoded){
        req.body.userId = decoded.userId;
        next();
    }
    else{
        res.status(400).send({msg:"Login first to access posts"})
    }
    

}

module.exports=authMiddleware;