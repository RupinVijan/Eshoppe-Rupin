const productSchema = require('../models/productmodel')

exports.createProduct = async(req,res,next)=>{
    const product= await productSchema.create(req.body)
    res.status(201).json({
        sucess:true,
        product
    })
}

exports.getAllProducts = (req,res)=>{
    res.status(200).send({message:"route is working fine"})
}