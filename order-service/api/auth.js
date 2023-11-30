const OrderService = require("../service/OrderService");
const {SubscribeMessage} = require('../utils')
module.exports =(app,channel)=>{
    
    const service = new OrderService();
    SubscribeMessage(channel,service)

    
}