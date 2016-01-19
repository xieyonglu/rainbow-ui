import Ajax from "./Ajax";

//-----------------------------------------------------------------------------------------------
//	date:	2015/08/15
//	
//	author: yonglu.xie
//	
//	description: All kinds of ajax package.
//-----------------------------------------------------------------------------------------------
var AjaxUtil = {
	
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
   doGet: function (url, data, settings) {
    	Ajax.ajax($.extend({
    		method: "GET",
    		dataType: "json",
    		contentType: "application/json; charset=UTF-8"
    	}, settings, {
    		url: url,
    		data: data
    	}));
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

module.exports = AjaxUtil;
