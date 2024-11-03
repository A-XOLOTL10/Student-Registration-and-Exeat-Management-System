// const studentInfoModel = require('../models/studentInfo');

// exports.validateUser =  async(req, res)=>{
//     try{
//         const {user, password} =   req.body;
//          const checker = await studentInfoModel.findOne({
//             MatricNo: user,
//             Password: password
//          })


//     }catch(err){
//         res.status(404).json({message: err.message});

//     }
// } 