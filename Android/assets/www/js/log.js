
$(document).ready(function() { 
	
	var lat = 0.0;
	var lon = 0.0;
	
	//Keep updating GPS data for log
	var watchPosition = navigator.geolocation.watchPosition( 
			function(position){lat = position.coords.latitude; lon = position.coords.longitude; onSuccess();} 
			,function(){alert('GPS FAIL!')} 
			,{frequency:5000,maximumAge: 30000, timeout: 30000, enableHighAccuracy:true}); 
	
	function onSuccess()
	{
		
		//Ajax request to get message data from db
		var request = $.ajax(
			    {
			        url: "http://ec2-23-22-121-122.compute-1.amazonaws.com/MessageDrop/Log.php",
			        type: "post",
			        data: {lon: lon, lat: lat}
			        
			    });
			    
			    request.done(function (response, textStatus, jqXHR)
			    {
			    	//Clear list for new values
			    	$("#list").html('');
			    	//Write new results to log window
			    	response = $.parseJSON(response);
			    	$.each(response, function(i, item) {
			    	    $("#list").append('<p><em>'+item['message']+'</em><br>Distance:'+item['distance']+' mi.</p><hr>');
			    	});
			    });
	}
	
    
	
    $("#drop").click(function() 
    {
    	window.location.href = "index.html";
  	});   

    
}); 


