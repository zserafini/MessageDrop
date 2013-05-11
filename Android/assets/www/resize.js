var designWidth = 480; 
var designHeight = 800; 
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
			$('body').css('zoom', scaleX);
			scaleChange = scaleX;
		} else {
			$('body').css('zoom', scaleY);
			scaleChange = scaleY;
		}
	}
}
