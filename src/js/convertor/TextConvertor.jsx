//-----------------------------------------------------------------------------------------------
//	date: 2015/10/31
//	
//	author: yonglu.xie
//	
//	description: TextConvertor Class
//-----------------------------------------------------------------------------------------------
var TextConvertor = {
	
	/**
	 * Submit Data --> onchange set value
	 */
	getAsObject: function(component, value){
		if(component.props.pattern != undefined){
			value = value.replace(/-/g, "").replace(/_/g, "");
		}
		return value;
	},
	
	/**
	 * Render Data --> render set value
	 */
	getAsString: function(component, value){
		return value;
	}
	
};

module.exports = TextConvertor;
