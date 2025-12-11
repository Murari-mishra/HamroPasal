const User = require("../models/user.model")

exports.registerUser = async (req, res)=>{
    try{
        const {name, email, password, role} = req.body;

        const user = await User.create({
            name,
            email,
            password,
            role,
        });


        res.status(201).json({
            success: true,
            message: " User register successfully",
            data: user,
        });

    } catch (error){

        res.status(500).json({success: false, message: error.message});
    }
};


exports.getAllUser = async (req, res) => {
    try{
        const users = await user.find();

        res.status(200).json({
            success: true,
            count: users.lenght,
            data: users,
        })

    } catch(error){
      
        res.status(500).json({success: false, message: error.message});

    }
}