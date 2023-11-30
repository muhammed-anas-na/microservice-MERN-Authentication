const amqplib = require('amqplib');

module.exports.CreateChannel=async()=>{
    try{
        const connection = await amqplib.connect('amqps://bnrqqysx:kJ5GkJoRLRDfv6aP_aBCelYGEvIcww3F@puffin.rmq2.cloudamqp.com/bnrqqysx')
        const channel = await connection.createChannel();
        await channel.assertExchange('AUTH-MERN','direct',false);
        return channel
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports.PublishMessage=async(channel,binding_key,message)=>{
    try{
        await channel.publish('AUTH-MERN',binding_key,Buffer.from(message))
        console.log("Message has been send to ", binding_key);
    }catch(err){
        console.log(err);
        return err;
    }
}


module.exports.SubscribeMessage = async(channel,service)=>{
    try{
        const appQueue = await channel.assertQueue('AUTH-QUEUE');
        channel.bindQueue(appQueue.queue,'AUTH-MERN','PRODUCT-SERVICE')
      
        channel.consume(appQueue.queue , data=>{
          console.log("Recieved data in Product service ");
          console.log(data.content.toString());
          service.SubscribeEvents(data.content.toString());
          channel.ack(data);
        })
    }catch(err){
        console.log(err);
        return err;
    }
}