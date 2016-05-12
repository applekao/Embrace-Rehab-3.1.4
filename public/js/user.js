var user = localStorage.getItem("user");
console.log(user);

var getUser = function () {
	user = prompt("Please enter your name", "Dad");
    if (user != null || typeof(Storage) !== "undefined") {
    	// Store
    	localStorage.setItem("user", user);
    	alert("Hi "+user+"!");
	} else {
    	alert("Sorry, your browser does not support Web Storage...");
	}	

}	