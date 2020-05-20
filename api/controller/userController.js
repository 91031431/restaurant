import mongoose from 'mongoose';
import { userSchema } from '../models/userModel';
import moment from 'moment';
import fs from'fs';
import jwt from 'jsonwebtoken';
import { decode } from 'punycode';

const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser._id = new mongoose.Types.ObjectId();
    //It was album before
    newUser.save((err, user) => {
        if (err){
            res.send(err);
            return;
        }
        res.json(user);
    });
};

export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(user);
    });
};


export const signUpUser = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10, (err, hash)=>{
        if (err){
            return req.status(500).json({
                error:err
            });
        }
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            Email: req.body.Email, 
            Password: hash,
            Phone: req.body.Phone,
            Name: req.body.Name,
            Address: req.body.Address

        });
        
        user.save((err, user) => {
            if (err){
                res.status(500).json({
                    error: err
                });
                return;
            }
            res.status(201).json({
                message: 'User created', 
                user
            });
        });
    })
};

// get signuture
const privateKey = fs.readFileSync('./keys/server.key');
const publicKey = fs.readFileSync('./keys/server.key.pub');

//app.set('passphrase', 'example');

export const login = async (req, res, next) => {
    const email = req.body.Email;
    const password = req.body.Password;

    const userFound = await User.findOne({Email: email});
    if (!userFound){
        //usuario n exist with this email
        return;
    }
   
    const matchedPass = await bcrypt.compare(password, userFound.Password);

    if (! matchedPass) {
        return res.status(401).send('Unauthorized password invalid');
    }

    //creating the JWT token 
    const iat = (new Date()).getTime();
    const exp = moment().add(24, 'hours').valueOf();
    const passphrase = 'example';
    const token = jwt.sign({
        userId: userFound._id,
        exp: exp,
        iat: iat,
    }, {key: privateKey, passphrase: passphrase}, { algorithm: 'RS256' });

    const response = {
        token,
        message: 'Authentication successfully finished.'
    };
    return res.status(201).json(response);
};

export const auth = async (req, res, next) => {
    const token = req.get('token');
    jwt.verify(token, publicKey, {algorithm: ['RS256']}, (error, decoded) => {
        if (error) {
            console.error(error);
            return res.status(400).send(error);
        } else {
            if (decoded.exp <= Date.now()) {
                return res.status(400).send('Access token has expired');
            }

            res.userId = decoded.userId;
            next();
        }
     }) ;

};