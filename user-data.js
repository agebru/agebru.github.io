$(document).ready(function(){
	$("#btnShowJson").click(function(){
		
		var jsonResponse=showJson();
		$("#result").html('<strong>Title:</strong>'+jsonResponse.title);
	});
	
	$("#btnShowString").click(function(){
		$("#result").html(showString);
	});
	
});

const userJsonData={		
		"userId": 1,
	    "id": 1,
	    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
	}

function showJson(){
	var jsonString= JSON.stringify(userJsonData);
	return JSON.parse(jsonString);
}

function showString(){
	return JSON.stringify(userJsonData);	
}


	
	 



function getUserJsonString(){
	return JSON.stringify(userJsonData);
}


function getUserJsonObject(jsonstr){
	return JSON.parse(jsonstr);
}

// then write ajax functions 
/*
$("#btn-show-object").click(function(){
	 $("#json-obj").show();
	  var jsonOb=getJsonObject(getJsonString());
	  //jsonOb.window.title
	    $("#json-obj").text(jsonOb.window.title);
	    $("#json-str").hide();
	  //  $(this).toggle();
});

$("#btn-show-string").click(function(){
	  $("#json-str").show();
	var jsnStr=getJsonString();
	  $("#json-str").text(jsnStr);
	  //$(this).toggle();
	  $("#json-obj").hide();
});

*/
