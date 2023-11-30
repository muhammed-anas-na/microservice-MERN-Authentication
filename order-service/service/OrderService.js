const {OrderModel} = require('../mongodb');
const jwt = require('jsonwebtoken');
const {PublishMessage , CreateChannel} = require('../utils')


class OrderService{


    async createOrder(products){
        const newOrder = OrderModel({
            product:products,
        })
        await newOrder.save()
        console.log("Order placed successfully")
    }

    async SubscribeEvents(payload){
        payload = JSON.parse(payload);
        const {event , data} = payload;

        console.log(payload)
        switch(event){
            case 'PLACE-ORDER':
                this.createOrder(data);
                break;
            default:
                break;
        }
    }
}

module.exports = OrderService;