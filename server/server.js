const path=require('path')
const express=require('express');
const socketIO=require('socket.io');
const http=require('http')
var publicPath=path.join(__dirname,'../public')
const port=process.env.PORT||3000
var app=express();

app.use(express.static(__dirname+'/../public'))

var server=http.createServer(app)
var io=socketIO(server)
io.on('connection',(socket)=>{
  console.log('New user connected');
  socket.on('disconnect',()=>{
    console.log('user was disconnected')
  })
})
server.listen(port)
