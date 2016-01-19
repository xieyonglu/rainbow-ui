import moment from "moment";
import config from "../component-config";

//-----------------------------------------------------------------------------------------------
//	date:	2015/12/23
//	
//	author: yonglu.xie
//	
//	description: DateUtil Class
//-----------------------------------------------------------------------------------------------
export default class DateUtil {
	
	static getCurrentDateTime(){
		var covertorValue = moment().format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
		return covertorValue;
	}
	
	static formatToSubmitFormater(date){
		if(date == undefined || date == null){
			return null;
		} else {
			return date.format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
		}
	}
    
}
