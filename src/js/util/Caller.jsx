var AjaxUtil = require("./AjaxUtil");

//-----------------------------------------------------------------------------------------------
//	date:		2015/08/15
//	
//	author:     tony.zhang
//	
//-----------------------------------------------------------------------------------------------
var Caller = {
	
	/**
	 * http post
	 * @param url
	 * @param data
	 * @param settings optional
	 * @returns {*}
	 */
	 doPost: function (url, data, settings) {
	 		Ajax.ajax($.extend({
	 			method: "POST",
			 	dataType: "json",
			 	contentType: "application/json; charset=UTF-8"
			}, settings, {
			 	url: url,
			 	data: JSON.stringify(data)
			}));
	 },
	 
	/**
	 * http put
	 * @param url
	 * @param data
	 * @param settings optional
	 * @returns {*}
	 */
	 doPut: function (url, data, settings) {
			Ajax.ajax($.extend({
				method: "PUT",
				dataType: "json",
				contentType: "application/json; charset=UTF-8"
			}, settings, {
				url: url,
				data: JSON.stringify(data)
			}));
	 },
	 
	/**
   * http get
   * @param url
   * @param data
   * @param settings
   * @returns {*}
   */
   doGet: function (url, param) {
   	　  var dtd = $.Deferred(); 
	　　AjaxUtil.doGet(url,param,{
						   async:false,
						   done: function(data){
						   	dtd.resolve(data);
						   },
						   fail:function(err){
						   	dtd.reject(err);
						   }
		}); 
	
   		return dtd.promise();
   },

   doService:function(service){
   	var dtd = $.Deferred();
　　$.when(service)

　　.done(function(data){ 

	dtd.resolve(data);

	})

　　.fail(function(){ 


	});
	return dtd.promise();
},
            
  /**
   * http delete
   * @param url
   * @param data
   * @param settings optional
   * @returns {*}
   */
   doDelete: function (url, data, settings) {
    	Ajax.ajax($.extend({
    		method: "DELETE",
    		dataType: "json",
    		contentType: "application/json; charset=UTF-8"
    	}, settings, {
    		url: url,
    		data: data
    	}));
   }
    
}

module.exports = Caller;
