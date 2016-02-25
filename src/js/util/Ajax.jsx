import AjaxStatus from "../component/overlay/ajaxstatus/AjaxStatus";
import Exception from "../component/misc/Exception";
import config from "../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: Ajax Class
//-----------------------------------------------------------------------------------------------
var Ajax = {
	
	/**
	 *
	 */
	 getData: function(options){
			let defer = $.Deferred();
			console.log("--x------" + JSON.stringify(options));
			// handler ajax url
	 		if(options.url.indexOf("?") > -1){
		    options.url = options.url + "&" + localStorage.getItem("Authorization");
		  } else {
		    options.url = options.url + "?" + localStorage.getItem("Authorization");
		  }
		  
			$.ajax($.extend({}, options, {
	 			//beforeSend: function(jqXHR){},
				
				//complete: function(jqXHR, textStatus){},
	      //success: function(data){
	     	// 	defer.resolve(data);
	      //},
	      //error: function(jqXHR, status, error){
	      //	defer.reject(jqXHR, status, error);
	      //}
			}))
			
			.done(function(data, textStatus, jqXHR){
				defer.resolve(data, textStatus, jqXHR);
			})
			
			.fail(function(jqXHR, textStatus, errorThrown){
				console.log("====fail====");
				defer.reject(jqXHR, textStatus, errorThrown);
			})
			
			.always(function(){
				
			});
			
			console.log("====xxxxxx=======");
			//setTimeout(function(){
			/*$.ajax({
            url: "http://www.baidu.com",
            async: true,
            method: "POST",
					 	dataType: "json",
					 	contentType: "application/json; charset=UTF-8",
            success: function(data){
            	console.log("==success==");
              defer.resolve(data)
            },
            fail: function(data){
            	console.log("==fail==");
            	defer.reject(data);
            }
      })*/
      
      //.done(function (data, textStatus, jqXHR) {
      //	console.log("==done===1");
			//	defer.resolve(data, textStatus, jqXHR);
			//})
			
			//.fail(function (jqXHR, textStatus, errorThrown) {
			//	console.log("==fail===2");
			//	defer.reject(jqXHR, textStatus, errorThrown);
			//})
			
			//.always(function () {
				
			//});
			//}, 0);
			
			console.log("===lok===");
			return defer.promise();
	 },
	 
	/**
	 *
	 */
	 ajax11: function(options){
			AjaxStatus.show();
			
			$.when(this.getData(options))
			.done(function(data, textStatus, jqXHR){
				console.log(data);
				console.log(textStatus);
				console.log(jqXHR);
				console.log("哈哈，都成功了！");
				//AjaxStatus.hide();
				let done = options.done;
				if (done !== undefined && done !== null) {
					done(data, textStatus, jqXHR);
				}
			})
			.fail(function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
				console.log("至少有一个出错啦！");
				
				
				// If need, it re login again
				if(jqXHR.status == "401" || jqXHR.status == "403"){
					//config.DEFAULT_CLASS.LOGIN.reLogin();
				}
				
				if(jqXHR.status == "200"){
					return;
				}
				
				let fail = options.fail;
				if (fail !== undefined && fail !== null) {
					let callback = null;
					if (typeof fail === "function") {
						callback = fail;
					} else {
						callback = fail["" + jqXHR.status];
					}
					
					if (callback != null) {
						callback(jqXHR, textStatus, errorThrown);
					} else {
						Exception.throw(jqXHR.status, jqXHR.responseText);
					}
				} else {
					Exception.throw(jqXHR.status, jqXHR.responseText);
				}
			});
			
			console.log("==end==");
			setTimeout(function(){
			console.log("==x===2=====");
				AjaxStatus.hide();
      }, 0);
	 },
	
	/**
	 * Ajax.ajax() to server
	 * @param options
	 * @returns {jqXHR}
	 */
	 ajax: function(options){
	 		// handler ajax url
	 		if(options.url.indexOf("?") > -1){
		    options.url = options.url + "&" + sessionStorage.getItem("Authorization");
		  } else {
		    options.url = options.url + "?" + sessionStorage.getItem("Authorization");
		  }
		  
	 		$.ajax($.extend({}, options, {
	 			beforeSend: function(jqXHR) {
	 				AjaxStatus.show();
				},
				
				complete: function(jqXHR, textStatus){},
	      success: function(data){}.bind(this),
	      error: function(jqXHR, status, error){}.bind(this)
			}))
			
			.done(function (data, textStatus, jqXHR) {
				let done = options.done;
				if (done !== undefined && done !== null) {
					done(data, textStatus, jqXHR);
				}
			})
			
			.fail(function (jqXHR, textStatus, errorThrown) {
				// If status is 200, is do nothing
				if(jqXHR.status == "200"){
					return;
				}
			
				// If need, it re login again
				if(jqXHR.status == "401" || jqXHR.status == "403"){
					config.DEFAULT_CLASS.LOGIN.reLogin();
				}
				
				let fail = options.fail;
				if (fail !== undefined && fail !== null) {
					let callback = null;
					if (typeof fail === "function") {
						callback = fail;
					} else {
						callback = fail["" + jqXHR.status];
					}
					
					if (callback != null) {
						callback(jqXHR, textStatus, errorThrown);
					} else {
						Exception.throw(jqXHR.status, jqXHR.responseText);
					}
				} else {
					Exception.throw(jqXHR.status, jqXHR.responseText);
				}
			})
			
			.always(function () {
				setTimeout(function(){
					AjaxStatus.hide();
				}, 0);
			});
	 }
	
}

module.exports = Ajax;
