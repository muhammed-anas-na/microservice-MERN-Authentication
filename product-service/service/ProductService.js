const {ProductModel} = require('../mongodb');
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
        let payload = {
            event:'PLACE-ORDER',
            data:products,
        }
        await PublishMessage(channel,'ORDER-SERVICE' , JSON.stringify(payload));
        return payload;
    }

    
    async SubscribeEvents(payload){
        payload = JSON.parse(payload);
        const {event , data} = payload;

        // switch(event){
        //     case 'ORDER-SUCCESS':
        //         this.successOrder(data);
        //         break;
        //     default:
        //         break;
        // }

    }
}

module.exports = ProductService;