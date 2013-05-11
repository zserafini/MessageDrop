var designWidth = 1480; 
var designHeight = 2800; 
var scaleChange = 1; 

function resize() {
	var docWidth = window.outerWidth;
	var docHeight = window.outerHeight;
	if (docWidth != designWidth) 
	{
		var scaleX = docWidth / designWidth;
		var scaleY = docHeight / designHeight;
		if (scaleX < scaleY) 
		{
			$(document.body).css('zoom', scaleX);
			scaleChange = scaleX;
		} else {
			$(document.body).css('zoom', scaleY);
			scaleChange = scaleY;
		}
	}
}
