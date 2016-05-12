//animate Frame

var anime = {};
anime.init = function(){
	var horizontalPanels = document.getElementsByClassName("panel");
	var panelToggleBtn = document.getElementsByClassName("panelToggle");
	for(i = 0; i < panelToggleBtn.length; i++){
		var currentDom = panelToggleBtn[i];
		currentDom.addEventListener("click",function(e){
		anime.switchToPanel(e.target);
		$(".panelToggle").removeClass("panelToggle_selected");
		e.target.className += " panelToggle_selected";
		});
	}
}
anime.switchToPanel = function(aim){
document.getElementById("mainScroll").style.left = 
(parseInt(aim.attributes.switchAim.value) * (-100)) + "%";
// document.getElementById("mainScroll").style.webkitTransform = 
// "translateX(" + (parseInt(aim.attributes.switchAim.value) * (-50)) + "%)";
}






//By Rubin Huang @ ITP 2016
