import Immutable from "../../../node_modules/immutable";

import StringUtil from "../util/StringUtil";
import ArrayUtil from "../util/ArrayUtil";

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
	}
	
};

module.exports = ValidatorContext;
