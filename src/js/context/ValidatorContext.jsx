import "../../../plugin/openvalidator/dist/css/bootstrapValidator.css";
import "../../../plugin/openvalidator/dist/js/bootstrapValidator";

import Immutable from "../../../node_modules/immutable";

import StringUtil from "../util/StringUtil";
import ArrayUtil from "../util/ArrayUtil";
import Util from "../util/Util";
import config from "../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/07/23
//	
//	author: yonglu.xie
//	
//	description: ValidatorContext
//-----------------------------------------------------------------------------------------------
var ValidatorContext = {
	
  // validator form
  form: null,
  	
  // validator list
	validatorList: [],
	//validatorList: Immutable.List(),
	
	/**
	 * Clear
	 */
	clear: function(){
		this.validatorList = [];
	},
	
	/**
	 * Create validator
	 */
	createValidator: function(validatorId){
		let validator = {validatorId: validatorId, validator: {}};
		this.validatorList.push(validator);
		
		//let validator = Immutable.Map().set({validatorId: validatorId, validator: Immutable.Map()});
		//this.validatorList.push(validator);
		
		return validator;
	},
	
	/**
	 * Set validator, if validator is null, it will create a new validator.
	 */
	//setValidator: function(validatorId, validatorJson){
	//	var validator = this.getValidator(validatorId);
	//	if(validator == null){
	//		validator = this.createValidator(validatorId).validator;
	//	}
	//	$.extend(true, validator, validatorJson);
	//},
	  
	/**
	 * Get validator by validatorId
	 */
	getValidator: function(validatorId){
		let validator = null;
		$.each(this.validatorList, (index, element) => {
			if(element.validatorId == validatorId){
				validator = element.validator;
			}
		});
		
		/*$.each(this.validatorList, (index, element) => {
			if(element.validatorId == validatorId){
				validator = element.validator;
			}
		});*/
			
		return validator;
	},
		
	/**
	 * Remove validator by validatorId
	 */
	removeValidator: function(validatorId, componentId){
		let validator = this.getValidator(validatorId);
		if(validator){
			delete validator[componentId];
		}
	},
		
 /**
	* Get validator by validatorIds, validators defined as 'a,b,c...'.
	*/
	getValidators: function(validatorIds){
		let _self = this;
		let validatorIdArray = ArrayUtil.trimArray(validatorIds.split(","));
		let validatorJson = {};
		//let validatorJson = Immutable.Map();
		
		$.each(validatorIdArray, (index, element) => {
			validatorJson = $.extend(true, validatorJson, _self.getValidator(element));
			//validatorJson = validatorJson.merge(_self.getValidator(element));
		});
		
		return validatorJson;
	},
		
	/**
	 * Get all validator
	 */
	getAllValidator: function(){
		let validatorJson = {};
		$.each(this.validatorList, (index, element) => {
			validatorJson = $.extend(true, validatorJson, element.validator);
		});
		
		/*let validatorJson = Immutable.Map();
		$.each(this.validatorList, (index, element) => {
			validatorJson = validatorJson.merge(element.validator);
		});*/
			
		return validatorJson;
	},
		
	/*
	 * Get Validator List
	 */
	getValidatorList: function(){
		return this.validatorList;
	},
		
	/*
	 * Put one validator in the existing validator.
	 */
	putValidator: function(validatorId, inputName, validatorJson){
		let _self = this, validatorIdArray = ArrayUtil.trimArray(validatorId.split(","));
		
		//for(let element of validatorIdArray){
		$.each(validatorIdArray, (index, element) => {
			let validator = _self.getValidator(element);
			
			if(validator == undefined){
				validator = _self.createValidator(element).validator;
			}
			//console.log(validator);
			
			if(validator[inputName] == undefined){
				//var validatorJson2 = '{"' + inputName + '": {"validators":' + '{}' +'}}';
				let inputValidatorJson = '{"' + inputName + '": {"message": "The username is not valid", "validators":' + '{}' +'}}';
				$.extend(true, validator, $.parseJSON(inputValidatorJson));
				//validator.merge($.parseJSON(inputValidatorJson));
				validator = _self.getValidator(element);
			}
			
			$.extend(true, validator[inputName].validators, validatorJson);
			//validator[inputName].validators.merge(validatorJson);
		});
	},
	
	/**
	 * Validate form
	 */
	validate: function(causeValidation, validationGroup){
		// reset form
		if(ValidatorContext.form != null && $(ValidatorContext.form).data("bootstrapValidator") != undefined){
			$(ValidatorContext.form).data("bootstrapValidator").resetForm();
			ValidatorContext.form.bootstrapValidator("destroy");
		}
		
		if(Util.parseBool(causeValidation)){
			let validator = null;
			if(validationGroup != undefined){
				validator = ValidatorContext.getValidators(validationGroup);
			} else {
				validator = ValidatorContext.getAllValidator();
			}
			
			ValidatorContext.form = $("#registerForm").bootstrapValidator({
				//live: "enabled",
				message: "This value is not valid",
				container: config.DEFAULT_VALIDATOR_CONTAINER,
				feedbackIcons: {
					valid: "glyphicon glyphicon-ok",
					invalid: "glyphicon glyphicon-remove",
					validating: "glyphicon glyphicon-refresh"
				},
				fields: validator,
				submitHandler: function (validator, form, submitButton){
          return false;
        }
			}).bootstrapValidator("validate");
			
			//if invalid field, the first field focus
			if(!$(ValidatorContext.form).data("bootstrapValidator").isValid()){
				let invalidField = $(ValidatorContext.form).data("bootstrapValidator").$invalidFields;
				if(invalidField.length > 0){
					$("#" + invalidField[0].id).focus();
				}
				return false;
			}
		}
		
		return true;
	}
	
};

module.exports = ValidatorContext;


//========================================================================================================
/*
	handlerOnClick1: function(event){
		$.fn.clearValidation = function(){
			var v = $(this).validate();
			$('[name]', this).each(function(){
				v.successList.push(this);
				v.showErrors();
			});
			v.resetForm();
			v.reset();
		};
	
		jQuery.validator.setDefaults({
		    highlight1: function (element, errorClass, validClass) {
		        if (element.type === "radio") {
		            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
		        } else {
		            $(element).closest('.form-group').removeClass('has-success has-feedback').addClass('has-error has-feedback');
		            $(element).closest('.form-group').find('i.fa').remove();
		            $(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
		        }
		    },
		    unhighlight1: function (element, errorClass, validClass) {
		    		if (element.type === "radio") {
		            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
		        } else {
		            $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
		            $(element).closest('.form-group').find('i.fa').remove();
		            $(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
		        }
		    },
				submitHandler: function (form) {
            return false;
        },
		    
		    highlight: function (element, errorClass) {
		       //$(element).closest('.form-group').addClass('has-error');
		       
		       $(element).closest('.form-group').addClass('has-error');
		       //$(element).closest('.form-group').find('i.fa').remove();
		       //$(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
		    },
		    unhighlight: function (element, errorClass) {
		       //$(element).closest('.form-group').removeClass('has-error');
		       
		       $(element).closest('.form-group').removeClass('has-error');
		       //$(element).closest('.form-group').find('i.fa').remove();
		       //$(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
		    },
		    showErrors: function(errorMap, errorList) {
		    		var _self = this;
		        $.each(this.successList, function(index, value) {
		        		_self.settings.unhighlight.call(this, value);
		            return $(value).popover("hide");
		        });
		        
		        return $.each(errorList, function(index, value) {
		        		_self.settings.highlight.call(this, value.element);
		            var _popover;
		            _popover = $(value.element).popover({
		                trigger: "manual",
		                placement: "auto",
		                content: value.message,
		                template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\" style=\"color: #A94442\"><p></p></div></div></div>"
		            });
		            _popover.data("bs.popover").options.content = value.message;
		            return $(value.element).popover("show");
		        });
		    }
		});
	
		var formElement = document.getElementById("registerForm");
 		var validator = $(formElement).validate();
		$('[name]', formElement).each(function(){
		   validator.successList.push(this);
		   validator.showErrors();
		});
		validator.resetForm();
		validator.reset();
		
		$('.form-group').each(function() {$(this).removeClass('has-error');});
		
		var settings = validator.settings;
		
		if(count % 2 == 0){
			$.extend(settings, {
           rules: {
			        'yonglu': {
			            required: true,
			            minlength: 5,
			            maxlength: 20
			        },
			        'expiryDate': {
			            required: true,
			            //email: true,
			            minlength: 5,
			            maxlength: 100
			        },
			        'effectiveDate': {
			            required: true,
			            minlength: 6,
			            maxlength: 25
			        }
			    },
			    onsubmit: false
			});
		} else {
			$.extend(settings, {
		    rules: {
		        'chassisNo': {
		            required: true,
		            minlength: 5,
		            maxlength: 20
		        },
		        'engineNo': {
		            required: true,
		            //email: true,
		            minlength: 5,
		            maxlength: 100
		        }
		    },
		    onsubmit: false
			});
		}
		
		count ++ ;
		if ($("#registerForm").valid()){
			//alert('==true==');
		} else {
			//alert('==false==');
		}
	}*/
