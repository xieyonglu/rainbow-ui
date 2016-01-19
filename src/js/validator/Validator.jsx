import ValidatorConstant from "./ValidatorConstant";
import InputValidator from "./InputValidator";
import EmailValidator from "./EmailValidator";
import DigitValidator from "./DigitValidator";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: Validator Class
//-----------------------------------------------------------------------------------------------
var Validator = {
	
	validate: function(validator, component){
		if(validator != null && validator != undefined){
				switch(validator){
					case (ValidatorConstant.INPUT_VALIDATOR):
						InputValidator.validate(component);
						break;
						
					case (ValidatorConstant.EMAIL_VALIDATOR):
						EmailValidator.validate(component);
						break;
						
					case (ValidatorConstant.DIGIT_VALIDATOR):
						DigitValidator.validate(component);
						break;
						
					default:
						break;
				}
		}
	}
	
};

module.exports = Validator;
