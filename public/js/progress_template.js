var checkProgress = function(option){
	var showProgress = function(option){
		document.getElementById("progressPage").style.display = "block";
	}

	var hideProgress = function(option){
		document.getElementById("progressPage").style.display = "none";
	}

	document.getElementById("progressBtn").addEventListener("click", showProgress);
	// document.getElementById("progressPage").innerHTML += "<h1 id ='backBtn'>Back</h1>";
	document.getElementById("backBtn").addEventListener("click", hideProgress);

}