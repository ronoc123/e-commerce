const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const customError = require("../errors")
const { attachCookiesToResponse, createTokenUser } = require('../utils')


const register = async (req, res) => {
    const { email, name, password } = req.body

    const emailAlreadyExists = await User.findOne({email})
    if(emailAlreadyExists) {
        throw new customError.BadRequestError("The email already exists.")
    }

    // first registered user is an admin 

    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create({ email, name, password, role })

    const tokenUser = createTokenUser(user)
    
    
    attachCookiesToResponse({res, user: tokenUser})

    res.status(StatusCodes.CREATED).json({ user:tokenUser })
}


const login = async (req, res) => {

    const { email, password} = req.body
    if(!email || !password) {
        throw new customError.BadRequestError('Invalid Email or Password.')
    }

    const user = await User.findOne({ email })
    if(!user) {
        throw new customError.UnauthenticatedError("Invalid credentials.")
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect) {
        throw new customError.UnauthenticatedError("Invalid Credentials.")
    }
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser})
    
    res.status(StatusCodes.OK).json({ user: tokenUser})
}

const logOut = async (req, res) => {
    res.cookie('token', "Logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.status(StatusCodes.OK).json({msg: 'User logged out!'})
}


module.exports = {
    register,
    login,
    logOut,
}



