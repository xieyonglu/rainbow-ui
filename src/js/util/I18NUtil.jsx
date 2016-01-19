import config from "../component-config";
//import i18n from "../i18n/reactjs-tag.i18n";


//-----------------------------------------------------------------------------------------------
//	date:		2015/11/13
//	
//	author: yonglu.xie
//	
//	description: I18NUtil Class
//-----------------------------------------------------------------------------------------------
export default class I18NUtil {
	
	/**
	 * I18N format message
	 */
	static format(message, ...args){
		$.each(args, function(index, element){
			message = message.replace("{" + index + "}", element);
		});
		
		return message;
	}
	
	
	/**
	 * I18N format object message
	 */
	static formatObject(message, ...args){
		var elementArray = [];
		$.each(args, function(index, element){
			var msgArray = message.split("{" + index + "}");
			
			if(msgArray.length == 2){
				elementArray.push(msgArray[0]);
				elementArray.push(element);
				message = msgArray[1];
			}
		});
		elementArray.push(message);
		return elementArray;
	}
	
	/**
	 * Get i18n message
	 */
	static getMessage(message){
		if(message == null || message == undefined){
			return "MSG Not Found";//i18n.MSG_NOT_FOUND;
		}
		
		return message;
	}
	
	/**
	 * Get system i18n config message
	 */
	static getSystemI18N(){
		let systemI18N = localStorage.getItem(config.DEFAULT_LOCALSTORAGE_I18NKEY);
		
		return (systemI18N != null && systemI18N != undefined) ? systemI18N : config.DEFAULT_SYSTEM_I18N;
	}
	
	/**
	 * Set system i18n config message
	 */
	static setSystemI18N(value){
		localStorage.setItem(config.DEFAULT_LOCALSTORAGE_I18NKEY, value);
	}
	
}

