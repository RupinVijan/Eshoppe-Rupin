const productSchema = require('../models/productmodel')
const Errorhandler = require('../utils/errorHandler')

exports.createProduct = async(req,res,next)=>{
    const product= await productSchema.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

exports.getProductById= async (req,res,next) =>{
    let product = await productSchema.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("product not found",404))
}
    res.status(200).send({
        success:true,
        product
    })
}

exports.getAllProducts = async(req,res)=>{
    const product = await productSchema.find();
    res.status(200).send({success:true,product})
}

exports.updateProduct = async(req,res,next)=>{
    let product = await productSchema.findById(req.params.id)
    if(!product){
        res.status(500).send({
            success:false,
            message:"product not Found"
        })}
    product =await productSchema.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).send({
        success:true,
        product
    })   
}

exports.deleteProduct = async (req,res,next) =>{
    const product = await productSchema.findById(req.params.id);
    if(!product){
        res.status(500).send({
            success:false,
            message:"Product not found"
        })
    }
    await productSchema.findByIdAndDelete(req.params.id)
    res.status(201).send({
        success:true,
        message:"Product Deleted Successfully."
    })
}