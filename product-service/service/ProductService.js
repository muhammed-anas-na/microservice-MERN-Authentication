const {ProductModel} = require('../mongodb');
const jwt = require('jsonwebtoken');
const {PublishMessage} = require('../utils')


class ProductService{

    async createProduct({name,desc,price}){
        const newProduct = new ProductModel({
            name,
            desc,
            price
        })
        await newProduct.save();
        return newProduct

    }

    async Buy(ids,channel){
        const products = await ProductModel.find({_id:{$in:ids}})
        PublishMessage(channel,'ORDER-SERVICE' , products);
    }
    
}

module.exports = ProductService;