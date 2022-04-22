const express = require("express");
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('hello nodemon my personal world')
})

const users = [
    {id:1,name:"sabana",email:"sabana@gmail.com", phone:"01829374987"},
    {id:2,name:"sabnura",email:"sabnura@gmail.com", phone:"01829374986"},
    {id:3,name:"sucorita",email:"sucorita@gmail.com", phone:"01829364987"},
    {id:4,name:"srabonti",email:"srabonti@gmail.com", phone:"01329374987"},
    {id:5,name:"resmika",email:"resmika@gmail.com", phone:"01629374987"},
    {id:6,name:"dipika",email:"dipika@gmail.com", phone:"01029374987"}
]

app.get('/users', (req,res)=>{
    if(req.query.name){
    const search=req.query.name.toLowerCase();
    const metched = users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(metched)
    }
    else{
        res.send(users)
    }
    
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=> u.id===id);
    res.send(user)
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})

app.listen(port,()=>{
    console.log('listen port',port);
})