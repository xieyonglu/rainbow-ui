//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: DigitConvertor Class
//-----------------------------------------------------------------------------------------------
var DigitConvertor = {
	
	/**
	 * Submit Data --> onchange set value
	 */
	getAsObject: function(component, value){
		let value = component.getDigitValue(component.canonicalDigit(value));
		if(value != ""){
			return parseFloat(value);
		}
		return null;
	},
	
	/**
	 * Render Data --> render set value
	 */
	getAsString: function(component, value){
		return component.formatDigit(component.canonicalDigit(value));
	}
	
};

module.exports = DigitConvertor;
