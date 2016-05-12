todo.addForm = function(option){
	var showForm = function(option){
		document.getElementById("newTodoList").style.display = "block";
	}

	var hideForm = function(option){
		document.getElementById("newTodoList").style.display = "none";
	}

	var uploadPlz = function(){
		var taskValue = document.getElementById('input_add_a_todo').value
		parsePost(taskValue);
		parseRefresh();
		hideForm();
	}

	document.getElementById("actionBtn").addEventListener("click", showForm);
	// document.getElementById("newTodoList").innerHTML += "<h1 id ='cancelBtn'>Cancel</h1>";
	document.getElementById("cancelBtn").addEventListener("click", hideForm);
	document.getElementById("addToParseBtn").addEventListener("click",uploadPlz);


	// var taskValue = document.getElementById('input_add_a_todo').value

}

	
