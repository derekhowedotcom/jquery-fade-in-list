$(document).ready(function(){
	//speed to fade the list in.
	var speed = 100;
	
	function fadeList(li){ 
		li.fadeIn(speed, function(){
			fadeList($(this).next()); 
		}); 
	}
	
	fadeList($("#list li:first"));
});