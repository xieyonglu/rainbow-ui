import SecurityUtil from "../util/SecurityUtil";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/11
//	
//	author: yonglu.xie
//	
//	description: TextareaConvertor Class
//-----------------------------------------------------------------------------------------------
var TextareaConvertor = {
	
	/**
	 * Submit Data --> onchange set value
	 */
	getAsObject: function(component, value){
		if(value != undefined && value != null){
			return SecurityUtil.escapeHTML(value).replace(/[\r\n]/g, "<br/>");
		}
		return value;
	},
	
	/**
	 * Render Data --> render set value
	 */
	getAsString: function(component, value){
		if(value != undefined && value != null){
			return SecurityUtil.unescapeHTML(value).replace(new RegExp("<br/>", "gm"), "\r\n");
		}
		return value;
	}
	
};

module.exports = TextareaConvertor;
