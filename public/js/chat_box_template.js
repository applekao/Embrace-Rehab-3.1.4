var chat = {

	template : null,

	roll : {
		receiver : "receive",
		sender : "send",
		broadcast : "broadcast"
	}

};


chat.loadTemp = function( roll, message, image ){


	var chatTemp = 	image+
					
					"<div class='panel panel-embrace-rehab chats " + roll + "' >"

					+

					message//Content

					// + "<div class = 'cheerBnt'> Cheer </div>"

					+ "</div>";
		

	$("#chatBox").append(chatTemp);
	if($("#chatBox").children().length > 1){
		document.getElementById('noMessageHolder').style.display = "none";
	}

}


chat.receive = function(message){
	var image = "<div></div>"

	chat.loadTemp(chat.roll.receiver, message, image);

}

chat.send = function(message){
	var image = "<div></div>"

	chat.loadTemp(chat.roll.sender, message, image);

}

chat.broadcast = function(message, people){
	if (people == null){ people = "老爸"};
	var fullMessage = people +" 完成了 <b>"+ message+ "</b>"
	var image = "<img src='img/logo_color.png' height='100' width='100' style='float:left'>" 
	chat.loadTemp(chat.roll.broadcast, fullMessage, image);
}

var brocastToFamily = function(dom){
	console.log(dom.parentNode);
	var taskContent = dom.parentNode.attributes.name.value;
	console.log(dom.parentNode);
	console.log(taskContent);
	chat.broadcast(taskContent, user);

	var messageObj = {
			broadcast : true,
			role : user,
			text : taskContent
		}
	socket.emit('chat message', messageObj);


	// socket.emit('todo', taskContent);
}

var sendTextListener = function(){

	var sendMessage = function(){
		var message = document.getElementById("inputBar").value;
		document.getElementById("inputBar").value = "";
		chat.send(message);
		var messageObj = {
			broadcast : false,
			role : user,
			text : message
		}
		socket.emit('chat message', messageObj);
		// socket.on('chat message', function(msg){
		// chat.receive(msg)});
	}
	document.getElementById("sendText").addEventListener("click", sendMessage);

	document.getElementById('inputBar').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      sendMessage();
    }
  }
}
// function chatTest(){
// 	for(i = 0; i < 10; i++){
// 		if( i % 2 ==0 ){
// 			chat.recive("Hi!");
// 		}
// 		else{
// 			chat.send("Yo!");
// 		}
// 	}
// }