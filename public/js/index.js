var socket=io()
socket.on('connect',function(){
  console.log('Connect to Server')

  // socket.emit('createEmail',{
  //   to:'julie@jds',
  //   text:'hey'
  // })

  socket.emit('createMessage',{
    to:'daya@ds',
    text:'what kjkljd'
  })
});
socket.on('disconnect',function(){
  console.log('Disconnect from server')
})
// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// })

socket.on('newMessage',function(message){
  console.log('message ',message);
})
