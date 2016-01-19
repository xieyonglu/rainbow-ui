import ConvertorConstant from "./ConvertorConstant";
import DateTimePickerConvertor from "./DateTimePickerConvertor";
import DigitConvertor from "./DigitConvertor";
import PercentConvertor from "./PercentConvertor";
import TextConvertor from "./TextConvertor";
import TextareaConvertor from "./TextareaConvertor";

//-----------------------------------------------------------------------------------------------
//	date: 2015/09/07
//	
//	author: yonglu.xie
//	
//	description: Convertor Class
//-----------------------------------------------------------------------------------------------
var Convertor = {
		
		/**
		 * Submit Data --> onchange set value
		 */
		getAsObject: function(convertor, component, value){
			if(convertor != null && convertor != undefined){
				switch(convertor){
					case (ConvertorConstant.DATETIMEPICKER_CONVERTOR):
						return DateTimePickerConvertor.getAsObject(component, value);
					
					case (ConvertorConstant.DIGIT_CONVERTOR):
						return DigitConvertor.getAsObject(component, value);
						
					case (ConvertorConstant.PERCENT_CONVERTOR):
						return PercentConvertor.getAsObject(component, value);
						
					case (ConvertorConstant.TEXT_CONVERTOR):
						return TextConvertor.getAsObject(component, value);
						
					case (ConvertorConstant.TEXTAREA_CONVERTOR):
						return TextareaConvertor.getAsObject(component, value);
					
					default:
						return value;
				}
			}
			
			return value
		},
		
		/**
		 * Render Data --> render set value
		 */
		getAsString: function(convertor, component, value){
			if(convertor != null){
				switch(convertor){
					case (ConvertorConstant.DATETIMEPICKER_CONVERTOR):
						return DateTimePickerConvertor.getAsString(component, value);
					
					case (ConvertorConstant.DIGIT_CONVERTOR):
						return DigitConvertor.getAsString(component, value);
						
					case (ConvertorConstant.PERCENT_CONVERTOR):
						return PercentConvertor.getAsString(component, value);
						
					case (ConvertorConstant.TEXT_CONVERTOR):
						return TextConvertor.getAsString(component, value);
						
					case (ConvertorConstant.TEXTAREA_CONVERTOR):
						return TextareaConvertor.getAsString(component, value);
					
					default:
						return value;
				}
			}
			return value;
		}
		
}

module.exports = Convertor;
