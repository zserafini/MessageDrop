
$(document).ready(function() { 
	
	var $form = $(this);
	var serializedData = $form.serialize();
	
    var request = $.ajax({
        url: "http://ec2-23-22-121-122.compute-1.amazonaws.com/MessageDrop/Log.php",
        type: "post",
        data: serializedData
    });
    
    request.done(function (response, textStatus, jqXHR){
        // log a message to the console
    	response = $.parseJSON(response);
    	$.each(response, function(i, item) {
    	    //alert(item['message']);
    	    $("#list").append('<p>'+item['message']+'</p>');
    	});
    });
	
    $("#drop").click(function() {
    	window.location.href = "index.html";
  	});   

    
}); 


