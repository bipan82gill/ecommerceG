import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import data from '../data.js';
import { generateToken, isAuth } from '../utils.js';
const userRouter = express.Router();

userRouter.get('/seed',expressAsyncHandler(async (req, res)=>{
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
 res.send({createdUsers});
}));
userRouter.post('/signin', expressAsyncHandler(async(req, res)=>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token: generateToken(user),
            })
        }
    }
}));

userRouter.post('/register', expressAsyncHandler(async(req, res)=>{
    const user = new User({ 
        email: req.body.email, 
        name: req.body.name, 
        password: bcrypt.hashSync(req.body.password, 8)})
        const createdUser = await user.save();
        res.send({
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email,
            isAdmin:createdUser.isAdmin,
            token: generateToken(createdUser),
        })
    }));

    userRouter.get('/:id', isAuth, expressAsyncHandler(async(req, res)=>{
        const user = await User.findById(req.params._id);
        if(user){
            res.send(user);
        }else{
            res.status(404).send({message:'User Not Found'});
        }
    }))
export default userRouter;