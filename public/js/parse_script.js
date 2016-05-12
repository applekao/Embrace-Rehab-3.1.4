// Parse.initialize("Hxb3OG8PxXKJGJqQfOQ3wFlFAfP5yIOAieOgyHcy", "qJGxLw63djQo1sSNdq3iNcJbSD3axbtLumxoOUax");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });


Parse.initialize("Hxb3OG8PxXKJGJqQfOQ3wFlFAfP5yIOAieOgyHcy", "qJGxLw63djQo1sSNdq3iNcJbSD3axbtLumxoOUax");

var parseInit = function(){
  var TodoTask = Parse.Object.extend("TodoTask");
  var todoTask = new TodoTask();
}

var parsePost = function(option){
  var TodoTask = Parse.Object.extend("TodoTask");
  var todoTask = new TodoTask();

  todoTask.set("tasks", option);
  todoTask.set("finished", false);
  todoTask.set("repeat", true);
  todoTask.set("reminder", "morning");
  todoTask.save(null, {
     success: function(todoTask) {
     // Execute any logic that should take place after the object is saved.
     alert('New object created with objectId: ' + todoTask.id);
     },
     error: function(todoTask, error) {
     // Execute any logic that should take place if the save fails.
     // error is a Parse.Error with an error code and message.
     alert('Failed to create new object, with error code: ' + error.description);
     }
  });


 // 	var uploadParse = Parse.Object.extend("TestObject");
	// var uploadParse = new uploadParse();
	// uploadParse.save({task: option }).then(function(object) {
 //  	alert("yay! it worked");
	// });

 }






 var parseRefresh = function(){
  $("#todoListBox").empty();
  document.getElementById("todoListBox").innerHTML="<div id = 'emptyHolder' onclick='resetFinished()'>All Clear</div>";
 	var TodoTask = Parse.Object.extend("TodoTask");
 	var todoTask = new TodoTask();

 	
 	var query = new Parse.Query(TodoTask);
	query.find({
  		success: function(results) {
  			console.log(results);

    		// console.log("Successfully retrieved " + results.length + " scores.");
    		// Do something with the returned Parse.Object values
    		for (var i = 0; i < results.length; i++) {
     	 	var object = results[i];
      		//console.log(object.id + ' - ' + object.get('playerName')+ ' - ' + object.get('score'));

      		var currentOption={
      			parseId : object.id,
      			tasks : object.get('tasks'),
      			finished : object.get('finished'),
            repeat : object.get('repeat'),
            reminder : object.get('reminder')

      		}

          if(currentOption.finished != true){

      		  todo.createNew(currentOption);

          }

    		}
  		},
  		error: function(error) {
    		console.log("Error: " + error.code + " " + error.message);
  		}

	});
 }

var setFinishedTrue =function(id){


  // Create a pointer to an object of class Point with id dlkj83d
  var TodoTask = Parse.Object.extend("TodoTask");
  var todoTask = new TodoTask();
  todoTask.id = id;

  // Set a new value on quantity
  todoTask.set("finished", true);

  // Save
  todoTask.save(null, {
  success: function(todoTask) {
    // Saved successfully.
    console.log("change status!");
  },
  error: function(todoTask, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
  }
  });
}

var setFinishedFalse =function(id){


  // Create a pointer to an object of class Point with id dlkj83d
  var TodoTask = Parse.Object.extend("TodoTask");
  var todoTask = new TodoTask();
  todoTask.id = id;

  // Set a new value on quantity
  todoTask.set("finished", false);

  // Save
  todoTask.save(null, {
  success: function(todoTask) {
    // Saved successfully.
    console.log("change status!");
  },
  error: function(todoTask, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
  }
  });
}


var resetFinished = function(){

  var TodoTask = Parse.Object.extend("TodoTask");
  var query = new Parse.Query(TodoTask);
  query.equalTo("finished", true);
  query.find({
    success: function(results) {
      // console.log("Successfully finished " + results.length + " tasks.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];

      console.log(object.id + ' - ' + object.get('tasks'));
      setFinishedFalse(object.id);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

parseRefresh();
}



  // var TodoTask = Parse.Object.extend("TodoTask");
  // var todoTask = new TodoTask();

  // todoTask.set("finished", true);
  // // console.log(id);

  // todoTask.save("id", {
  //    success: function(todoTask) {
  //    // Execute any logic that should take place after the object is saved.
  //    // todoTask.set("finished", true);
  //    alert('New object created with objectId: ' + todoTask.id);
  //    },
  //    error: function(todoTask, error) {
  //    // Execute any logic that should take place if the save fails.
  //    // error is a Parse.Error with an error code and message.
  //    alert('Failed to create new object, with error code: ' + error.description);
  //    }
  // });




 //  var parseCreat = function(){

	// var GameScore = Parse.Object.extend("GameScore");
	// var gameScore = new GameScore();

	// gameScore.set("score", 1337);
	// gameScore.set("playerName", "Sean Plott");
	// gameScore.set("cheatMode", false);
	// gameScore.save(null, {
 //  		success: function(gameScore) {
 //    	// Execute any logic that should take place after the object is saved.
 //    	alert('New object created with objectId: ' + gameScore.id);
 //  		},
 //  		error: function(gameScore, error) {
 //    	// Execute any logic that should take place if the save fails.
 //    	// error is a Parse.Error with an error code and message.
 //    	alert('Failed to create new object, with error code: ' + error.description);
 //  		}
	// });
	

  // var uploadParse = Parse.Object.extend("TestObject");
  // var query = new Parse.Query(uploadParse);
  // console.log("parseinit");
  // query.get("upX2hZ62Bg",{
  //   success: function(object) {
 //     // The object was retrieved successfully.
 //     var task = query.get("task");
 //     // console.log(object);
 //     // console.log(task);
 //      },
 //     error: function(object, error) {
 //        // The object was not retrieved successfully.
 //     // error is a Parse.Error with an error code and message.
 //     }


  // });
