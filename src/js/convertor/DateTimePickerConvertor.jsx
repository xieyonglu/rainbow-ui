import moment from "moment";
import config from "../component-config";


//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: DateTimePickerConvertor Class
//-----------------------------------------------------------------------------------------------
var DateTimePickerConvertor = {
		
		/**
		 * Submit Data --> onchange set value
		 */
		getAsObject: function(component, value){
			if(value == undefined || value == null){
				return null;
			}
		
			let format =this.getFormat(component);
			// if format is "YYYY", return year like "2015"
			if(format == "YYYY"){
				return value;
			}
			
			let convertorValue = moment(value, format).format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
			if(convertorValue == "Invalid date" || format.length > value.length){
				return value;
			}
			return convertorValue;
		},
		
		/**
		 * Render Data --> render get value
		 * "2011-01-13T16:00:00Z"
		 */
		getAsString: function(component, value){
			if(value == undefined || value == null){
				return null;
			}
			
			let format = this.getFormat(component);
			let convertorValue = moment(value, config.DEFAULT_DATETIME_SUBMIT_FORMATER).format(format);
			if(convertorValue == "Invalid date" || format.length > value.length){
				return value;
			}
			return convertorValue;
		},
		
		getFormat: function(component){
			let format = config.DEFAULT_DATETIME_FORMATER;
			if(component.props.format != undefined) {
				format = component.props.format;
			}
			
			return format;
		}
		
};

module.exports = DateTimePickerConvertor;
