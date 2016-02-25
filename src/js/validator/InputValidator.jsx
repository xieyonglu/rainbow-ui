import ValidatorContext from "../context/ValidatorContext";
import ELUtil from "../util/ELUtil";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/31
//	
//	author: yonglu.xie
//	
//	description: InputValidator Class
//-----------------------------------------------------------------------------------------------
var InputValidator = {
	
	validate: function(component){
		var validator = {};
		
		// handler requried validator
		if(ELUtil.parseBoolValue(component.props.required)){
			validator = $.extend({}, validator, {
				notEmpty: {
					message: this.getRequiredMessage(component)
				}
			});
		}
		
		// handler min length and max length validator
		if(component.props.minLength || component.props.maxLength){
			if(component.props.pattern != undefined){
				ValidatorContext.putValidator(component.getValidationGroup(), component.componentId, {
					callback: {
						message: this.getMinMaxLengthMessage(component),
						callback: function(value, validator) {
							var minLength = parseInt(component.props.minLength);
							var maxLength = parseInt(component.props.maxLength);
							
							value = value.replace(/-/g, "").replace(/_/g, "");
							
							if(minLength > value.length || maxLength < value.length){
								return false;	
							}
							return true;
						}
					}
				});
			} else {
				validator = $.extend({}, validator, {
					stringLength: {
						min: component.props.minLength,
						max: component.props.maxLength,
						message: this.getMinMaxLengthMessage(component)
					}
				});
			}
		}
		
		/*if(false && (component.props.maxValue || component.props.minValue)){
			console.log(component.componentId + "==" + component.props.maxValue + "===" + component.props.minValue);
			validators = $.extend({}, validators, {
				between: {
					min: component.props.minValue,
					max: component.props.maxValue,
					message: "The value must be more than " + component.props.minValue + " and less than " + component.props.maxValue
				},
				digits: {
					message: 'The office phone number is not valid'
				}
			})
		}
			
		if(false){
			validators = $.extend({}, validators, {
				regExp: {
					regExp: '/^[a-zA-Z0-9_]+$/',
					message: 'The username can only consist of alphabetical, number and underscore'
				}
			})
		}*/
		
		ValidatorContext.putValidator(component.getValidationGroup(), component.componentId, validator);
	},
	
	/**
	 * Get required message
	 */
	getRequiredMessage: function(component){
		return "The " + component.props.label + " is required and cannot be empty";
	},
	
	/**
	 * Get min length and max length message
	 */
	getMinMaxLengthMessage: function(component){
		var minLengthMessage = component.props.minLengthMessage;
		var maxLengthMessage = component.props.maxLengthMessage;
		
		if(minLengthMessage == undefined && maxLengthMessage == undefined){
			return "The value must be more than " + component.props.minLength + " and less than " + component.props.maxLength + " characters long";
		} else {
			var message = "";
			message = (minLengthMessage != undefined) ? (message + minLengthMessage + "<br/>") : message;
			message = (maxLengthMessage != undefined) ? (message + maxLengthMessage) : message;
			return message;
		}
	}
	
};

module.exports = InputValidator;
