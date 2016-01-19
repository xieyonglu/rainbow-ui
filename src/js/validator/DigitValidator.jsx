import ValidatorContext from "../context/ValidatorContext";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/19
//	
//	author: yonglu.xie
//	
//	description: DigitValidator Class
//-----------------------------------------------------------------------------------------------
var DigitValidator = {
	
	validate: function(component){
		if(component.props.minValue || component.props.maxValue){
			ValidatorContext.putValidator(component.getValidationGroup(), component.componentId, {
				/*between: {
					min: component.props.minValue,
					max: component.props.maxValue,
					message: "The value must be more than " + component.props.minValue + " and less than " + component.props.maxValue
				}*/
				callback: {
					message: this.getMinMaxValueMessage(component),
					callback: function(value, validator) {
						// If value is null or "", validate pass
						if(value == null || value == ""){
							return true;
						}
						
						var minValue = parseFloat(component.props.minValue);
						var maxValue = parseFloat(component.props.maxValue);
						value = component.getDigitValue(component.canonicalDigit(value));
						if(minValue > value || maxValue < value){
							return false;	
						}
						return true;
						
						/*value = parseInt(value, 10);
						var year = validator.getFieldElements('expYear').val(),
							currentMonth = new Date().getMonth() + 1,
							currentYear  = new Date().getFullYear();
						if (value < 0 || value > 12) {
							return false;
						}
						if (year == '') {
							return true;
						}
						year = parseInt(year, 10);
							if (year > currentYear || (year == currentYear && value > currentMonth)) {
								validator.updateStatus('expYear', 'VALID');
								return true;
							} else {
								return false;
							}
						}*/
					}
				}
			});
		}
	},
	
	/**
	 * Get min value and max value message
	 */
	getMinMaxValueMessage: function(component){
		var minValueMessage = component.props.minValueMessage;
		var maxValueMessage = component.props.maxValueMessage;
		
		if(minValueMessage == undefined && maxValueMessage == undefined){
			return "The value must be more than " + component.props.minValue + " and less than " + component.props.maxValue;
		} else {
			var message = "";
			message = (minValueMessage != undefined) ? (message + minValueMessage + "<br/>") : message;
			message = (maxValueMessage != undefined) ? (message + maxValueMessage) : message;
			return message;
		}
	}
	
};

module.exports = DigitValidator;
