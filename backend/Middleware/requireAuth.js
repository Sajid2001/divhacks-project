const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const requireAuth = async(req, res, next) => {

    //verify authentication
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization Token Required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findOne({_id}).select('_id')
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({error: 'Request Not Authorized'})
    }

}

module.exports = requireAuth