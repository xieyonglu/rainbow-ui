//var Util = {
module.exports = {
	
	/**
	 * Convertor input value to bool value
	 * @method parseBool
	 * @param {*} _input
	 * @return bool
	 */
	parseBool: function(_input){
		if(typeof _input == 'string'){
			_input = _input.replace( /[\s]/g, '' ).toLowerCase();
			if( _input && ( _input == 'false' || _input == '0' || _input == 'null' || _input == 'undefined'|| _input == 'n')){
				_input = false;
			}
			else if(_input || _input == 'y'){
				_input = true;
			}
	  }
	  return !!_input;
	},
	
	/**
	 * Determine whether it is an array type
	 */
	isArray: function(obj){
		return (typeof obj == 'object') && obj.constructor == Array;
	},
	
	/**
	 * Determine whether it is an string type
	 */
	isString: function(str){
		return (typeof str == 'string') && str.constructor == String;
	},
	
	/**
	 * Determine whether it is an number type
	 */
	isNumber: function(obj){
		return (typeof obj == 'number') && obj.constructor == Number; 
	},
	
	/**
	 * Determine whether it is an date type
	 */
	isDate: function(obj){
		return (typeof obj == 'object') && obj.constructor == Date;
	},
	
	/**
	 * Determine whether it is an function type
	 */
	isFunction: function(obj){
		return (typeof obj == 'function') && obj.constructor == Function;
	},
	
	/**
	 * Determine whether it is an object type
	 */
	isObject: function(obj){
		return (typeof obj == 'object') && obj.constructor == Object;
	}

}

//module.exports = Util;
