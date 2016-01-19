//-----------------------------------------------------------------------------------------------
//	date: 2015/10/16
//	
//	author: yonglu.xie
//	
//	description: PercentConvertor Class
//-----------------------------------------------------------------------------------------------
var PercentConvertor = {
	
	/**
	 * Submit Data --> onchange set value
	 */
	getAsObject: function(component, value){
		if(value != "" && value != null && value != undefined){
			let formatValue = component.formatDigit(component.canonicalDigit(value));
			//eg: 33.55->0.3355, 5.55->0.0555
			return parseFloat(parseFloat(value/parseInt(component.props.limit)).toFixed(component.decimalPrecision + 2));
		}
		return null;
	},
	
	/**
	 * Render Data --> render set value
	 */
	getAsString: function(component, value){
		if(value != undefined){
			return component.formatDigit(component.canonicalDigit(value * parseInt(component.props.limit)));
		}
		return value;
	}
	
};

module.exports = PercentConvertor;
