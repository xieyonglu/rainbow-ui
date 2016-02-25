import ValidatorContext from "../context/ValidatorContext";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: EmailValidator Class
//-----------------------------------------------------------------------------------------------
var EmailValidator = {
	
	validate: function(component){
		ValidatorContext.putValidator(component.getValidationGroup(), component.componentId, {
			emailAddress: {
				message: "The input is not a valid email address"
			}
		});
	}
	
};

module.exports = EmailValidator;
