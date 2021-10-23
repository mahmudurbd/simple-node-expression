const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const users = [
    {id:0,name:'shabana',email:'shabana@gmail.com', phone: '017559633'},
    {id:1,name:'Razzak',email:'razzak@gmail.com', phone: '017889633'},
    {id:2,name:'Bobita',email:'bobita@gmail.com', phone: '017559678'},
    {id:3,name:'Chompa',email:'chompa@gmail.com', phone: '01747896337'},
    {id:5,name:'Alomgir',email:'alomgir@gmail.com', phone: '0175594782'},
    {id:6,name:'Suchorita',email:'suchorita@gmail.com', phone: '017559479'},
]

/* app.get('/',(req,res) => {
    res.send('Hello from practice node with express and nodemon test');
}) */

// load all data
/* app.get('/users',(req,res) => {
    res.send(users);
}) */

// load single data
/* app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const search = users[id];
    res.send(search);
}) */

// set search query 
app.get('/users',(req,res) => {
    const search = req.query.search;
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
    res.send(users);
})

    // app. METHOD
    app.post('/users',(req,res) => {
        const newUser = req.body;
        newUser.id = users.length;
        users.push(newUser);
        console.log('hitting the post',req.body);
        // res.send(JSON.stringify(newUser));
        res.json(newUser);
        res.send('inside post');
    })


app.listen(port,()=> {
    console.log('Listen to port',port);
})