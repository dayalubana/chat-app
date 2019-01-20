const path=require('path')
const express=require('express');
const socketIO=require('socket.io');
const http=require('http')
var publicPath=path.join(__dirname,'../public')
const port=process.env.PORT||3000
var app=express();

app.use(express.static(__dirname+'/../public'))

var server= http.createServer(app)
var io=socketIO(server)
io.on('connection',(socket)=>{
  console.log('New user connected');

  // socket.emit('newEmail',{
  //   from:'jen@ksl',
  //   text:'hey',
  //   createdAt:123
  // })
  //
  // socket.on('createEmail',function(Email){
  //   console.log(Email);
  // })

  socket.emit('newMessage',{
    from:'jen@mds',
    text:'hepppp',
    createdAt:123
  })

  socket.on('createMessage',function(newMessage){
    console.log('newMessage',newMessage);
  })

  socket.on('disconnect',()=>{
    console.log('user was disconnected')
  })
})
server.listen(port)
