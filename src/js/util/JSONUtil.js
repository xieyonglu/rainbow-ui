var JSONUtil = {

	getJSON: function(url){
		var json = null;
	 	jQuery.ajax({
	 		type: "get",
	 		async: false,
	 		url: url,
	 		contentType: "application/json; charset=utf-8",
	 		dataType: "json",
	 		cache: false,
	 		success: function (data) {
	 			json = data;
	 		},
	 		error: function (err) {
	 		
	 		}
	 	});
	 	return json;
 	}

};
module.exports=JSONUtil;