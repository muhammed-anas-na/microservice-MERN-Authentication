const ProductService = require("../service/ProductService");
const isAuthenticated = require('../isAuthenticated');

module.exports =(app,channel)=>{
    
    const service = new ProductService();
    //Create product
    //Buy a product

    app.post('/product/create' , isAuthenticated ,async (req,res)=>{
        const data = await service.createProduct(req.body)
        return res.json(data);
    })
    
    app.post('/product/buy' , isAuthenticated , async(req,res)=>{
        const { ids } = req.body;
        const data = await service.Buy(ids,channel)
        res.json(data);
    })
}