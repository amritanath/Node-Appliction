const path = require('path');
const http =require('http');
const express = require('express');
const socketIO =require('socket.io');

const {generateMessage} = require('./utils/message');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection', (socket)=>{

  console.log('new user connected');


  // socket.emit from Admin text welcome to chat app
  socket.emit('newMessage', generateMessage('Admin', 'Weclome to the chat app'));
  // socket.broadcast.emit from admin text New user joined
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));






// ====1
  // socket.emit('newEmail', {
  //   from :'amrita@gmail.com',
  //   text :'hey what is going on',
  //   createtime : 123
  // });

  // socket.on('createEmail', (newEmail)=>{
  //   console.log('createEmail', newEmail);
  // });
//====2
  // socket.emit('newMessage', {
  //   from :'amrita@gmail.com',
  //   text :'see you then',
  //   createtime : 123456
  // })



  // socket.on('createMessage', (message)=>{
  //   console.log('createMessage', message);
  //   io.emit('newMessage',{
  //     from: message.from,
  //     text: message.text,
  //     createdAt :new Date().getTime()
  //   });
// !
// v
  socket.on('createMessage', (message)=>{
    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from , message.text ));


    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt :new Date().getTime()
    // });
  });


  socket.on('disconnect', ()=>{
    console.log('Dis-connected from server');
  });

});
// console.log(publicpath);
server.listen(port ,()=>{
  console.log(`SERVER IS UP ON PORT : ${port}`);
})
