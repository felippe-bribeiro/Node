
module.exports = (app)=>{

    app.get('/users',(req, res)=>{


        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                name: 'Felippe',
                email: 'felippe.bribeiro@gmail.com',
                id:1
            }]
        
        });
    });
    
    app.get('/users/admin', (req, res)=>{
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                name: 'Jose',
                email: 'jose@jose.com.br',
                id:1
            }]
        
        });
    });
    


};