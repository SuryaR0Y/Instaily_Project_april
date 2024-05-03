const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
//const colors=require("colors");
require('dotenv').config();

const port= process.env.PORT || 3400;

const db = require("./models");
const  {user}  = require("./models");

//REST object
const app=express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


const userRoutes = require('./routes/userRoutes');

app.use('/user',userRoutes);

db.sequelize.sync().then((req) => {
app.listen(port,()=>{
    console.log(`app running on localhost ${port}`)
})
})



// <--------------------------- Web Socket Code --------------------------->

// const io = new SocketIO(server);
// const PORT = process.env.PORT || 8000;

// // Create a users map to keep track of users
// const users = new Map();

// io.on('connection', socket => {
//     console.log(user connected: ${socket.id});
//     users.set(socket.id, socket.id);
//     console.log(users)

//     // emit that a new user has joined as soon as someone joins
//     socket.broadcast.emit('user:joined', socket.id);
//     socket.emit('hello',{id: socket.id})
//     console.log(${id} +Joined)

//     socket.on('outgoing:call', data => {  //SENDING OFFER FROM A TO B
//         const { fromOffer, to } = data;  //'to' refers to id of B

//         socket.to(to).emit('incomming:call', { from: socket.id, offer: fromOffer });
//     });
    
//     socket.on('call:accepted', data => { // B accepts the call and sends back the answer to the server
//         const { answer, to } = data; //'to' refers to id of A
//         socket.to(to).emit('incomming:answer', { from: socket.id, offer: answer })
//     });


//     socket.on('disconnect', () => {
//         console.log(user disconnected: ${socket.id});
//         users.delete(socket.id);
//         socket.broadcast.emit('user:disconnect', socket.id);
//     });
// });


// app.use(express.static( path.resolve('./public') ));

// app.get('/users', (req, res) => {
//     return res.json(Array.from(users));
// });
