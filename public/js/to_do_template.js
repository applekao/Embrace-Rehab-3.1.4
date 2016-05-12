//todo temp

var todo = {}

todo.todoList = [];

var testOption = {
	name: "Walk 200 steps",
	assign: "Louis",
	due: 24,
	content: "Walk 200 step after you pee.",
	repeat: 24,
	url: null
}

todo.createNew = function(option){

todo.todoList[todo.todoList.length] = new todo.newTodoItem(option);

}

todo.newTodoItem = function(option){

 	//name, assign, due, content, reminder, url
	// for( var key in options ){
	// 	console.log( options[key] );
	// }
	this.option = option; 

 	todo.newTodoItem.prototype.add = function(){
 	var todoTemp = {
			start:"<div class='panel  panel-embrace-rehab panelTodo' todoId='" + option.parseId + "' name='"+ option.tasks +"' >",
			checkBox: "<input type='checkbox' class='finished' name='finished' value='false'>",
			heading:"<div class='panel-heading'>",
			dueTime:"<div class='panel-body todoDueTime'>",
			end:"</div>"
		}

		var newTodoItem = todoTemp.start + 
								todoTemp.heading + todoTemp.checkBox + option.tasks + todoTemp.end +
						  todoTemp.end;
		document.getElementById("todoListBox").innerHTML += newTodoItem;

		todo.checkLength("add");
		checkBoxListener();
 	}

 	todo.newTodoItem.prototype.clear = function(){
 		todo.checkLength();
 	}

 	todo.newTodoItem.prototype.add();

}

todo.checkLength = function(caller){
	var currentLength = null;
	if(caller == "add"){
		currentLength = todo.todoList.length + 1;
	}
	else{
		currentLength = todo.todoList.length;
	}
	if(currentLength == 0){
		document.getElementById("emptyHolder").style.display = "block";
	}
	else{
		document.getElementById("emptyHolder").style.display = "none";	
	}
}


var checkBoxListener = function(){
var todoLength = document.getElementsByClassName("panelTodo");

function killBox(dom){
	var id = dom.parentNode.attributes.todoid.value;
	setFinishedTrue(id);
	dom.parentNode.remove();
	brocastToFamily(dom);
}

console.log(document.getElementsByClassName("finished"));


	for (var i = 0; i < todoLength.length; i++) {

	var currentTodo = document.getElementsByClassName("finished")[i];
	currentTodo.addEventListener("change", function(currentTodo){killBox(currentTodo.target.parentNode)});



	}
}









//By Rubin Huang @ ITP 2016
