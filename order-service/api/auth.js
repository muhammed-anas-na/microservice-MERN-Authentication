const OrderService = require("../service/OrderService");
const {SubscribeMessage} = require('../utils')
module.exports =(app,channel)=>{
    
    SubscribeMessage(channel)
    const service = new OrderService();

    
}