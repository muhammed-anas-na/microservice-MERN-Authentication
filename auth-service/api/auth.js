const AuthService = require("../service/auth-service");

module.exports =(app)=>{
    
    const service = new AuthService();

    app.post('/auth/register' , async(req,res)=>{
        const {email,password,name} = req.body;
        const data = await service.createUser(email,password,name)
        res.json(data)
    })

    app.post('/auth/login' , async(req,res)=>{
        const {email,password} = req.body;
        const data = await service.LoginUser(email,password)
        res.json(data);
    })
    
}