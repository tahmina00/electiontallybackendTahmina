const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

dotenv.config({ path: '../config.env' });



const Authenticate = async(req, res, next) => {
	console.log('authenticate')
	console.log(req.cookies.jwtoken)
	if(req.cookies.jwtoken){
	try{
		const token = req.cookies.jwtoken;
		
		const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
		
		
				//const verifyToken = jwt.verify(token, 'ASDEFCVXZBNVGHNB');
		const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token });
		if(!rootUser) { throw new Error('User Not Found')}
		
		req.token = token;
		req.rootUser = rootUser;
		req.userID = rootUser._id;
		
		next();
		
	} catch(err)
	{
		res.status(401).send('Unauthorized: no token provided');
		console.log(err);
	}
	}
	 
	 }

module.exports = Authenticate;