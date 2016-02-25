var isFunction = require('./Util');
var Util = require('./Util');

var ELUtil = {
	
	isEL: function(expression){
		if(expression != null && expression != undefined && expression.length > 3 && 
			(expression.charAt(0) == '#' || expression.charAt(0) == '$') && 
			expression.charAt(1) == '{' &&  
			expression.charAt(expression.length - 1) == '}'){
			return true;
		}
		return false;
	},
	
	getELContent: function(expression){
		return expression.substr(2, expression.length - 3);
	},
	
	parseBoolValue: function(expression){
		if(expression == null || expression == undefined){
			return false;
		} else if(Util.isFunction(expression)){
			return expression.call();
		} else {
			return Util.parseBool(expression);
		}
	},
	
	parseValue: function(expression){
		if(expression == null || expression == undefined){
			return null;
		} else if(Util.isFunction(expression)){
			return expression.call();
		} else {
			return expression;
		}
	}
}

module.exports = ELUtil;
