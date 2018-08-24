var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   from :'shwetha@gmail.com',
  //   text :'hey , Amrita here'
  // });
// ===2
  // socket.emit('createMessage', {
  //   from :'shwetha@gmail.com',
  //   text :'hey , im here'
  // });


});

socket.on('disconnect', function() {
  console.log('Dis-connected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
//
// });

socket.on('newMessage', function(message) {
  console.log('newMessage', message);

});
