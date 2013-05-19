$(document).ready(function() { 
	
	var lat = 0.0;
	var lon = 0.0;
	
	//Keep updating GPS data
	var watchPosition = navigator.geolocation.watchPosition( 
		function(position){lat = position.coords.latitude; lon = position.coords.longitude;} 
		,function(){alert('GPS FAIL!')} 
		,{frequency:5000,maximumAge: 30000, timeout: 30000, enableHighAccuracy:true}); 
	
	
	$("#log").click(function() 
	{
		window.location.href = "log.html";
	}); 
	
	$("#kill").click(function() 
	{
		navigator.geolocation.clearWatch(watchPosition);
		navigator.app.exitApp();
	}); 
    
	//Start a new message request when drop button is clicked
    $("#newdrop").click(function() 
    {
    	//Send new request to server
    	var request = $.ajax(
    	{
            url: "http://ec2-23-22-121-122.compute-1.amazonaws.com/MessageDrop/CreateMessage.php",
            type: "post",
            data: {message: $('input[id=message]').val(), lon: lon, lat: lat}
        });
        
        request.done(function (response, textStatus, jqXHR)
        {
        	alert('Message Dropped!');
        });
    });
}); 