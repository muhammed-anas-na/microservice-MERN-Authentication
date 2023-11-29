const {userModel} = require('../mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService{

    async createUser(email,password,name){
        const userExist = await userModel.findOne({email});
        if(userExist){
            return "User already exist";
        }else{
            password = await bcrypt.hash(password,10)
            const newUser = new userModel({
                name,
                email,
                password
            })
            newUser.save();
            return newUser;
        }
    }

    async LoginUser(email,password){
        const userExist =  await userModel.findOne({email})
        if(!userExist){
            return {message:"User not found"}
        }else{
            console.log("Creating user")
            const payload ={
                email,
                name:userExist.name
            }
            const token = await jwt.sign(payload , "secret")
            return {token:token};
        }

    }

}

module.exports = AuthService;