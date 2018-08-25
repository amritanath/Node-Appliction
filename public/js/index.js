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

  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);

});

// socket.emit('createMessage' , {
//   from: 'Frank',
//   text:'Hi'
// }, function(data){
//   console.log('Got it', data);
// });


jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){

  });
});
