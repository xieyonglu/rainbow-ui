import config from "../component-config";
import Util from "../util/Util";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: CodeTable Class
//-----------------------------------------------------------------------------------------------
export default class CodeTable {

	/**
	 * construct code table
	 * @param codeTableArray array of json object, eg: {id:"1", text:"text"}
	 * @param renderer optional
	 * @param sorter {CodeTableSorter} optional
	 */
	constructor(codeTableArray, renderer, sorter) {
		this.codes = codeTableArray;
		let map = {};
		
		this.codes.forEach(function (code) {
			map[code[config.DEFAULT_CODETABLE_KEYVALUE.KEY]] = code;
			if(renderer){
				code[config.DEFAULT_CODETABLE_KEYVALUE.VALUE] = renderer(code);
			}
		});
		
		this.map = map;
		if(sorter){
			sorter.sort(this.codes);
		}
	}
	
	/**
	 * Get codetable code
	 */
	getCode(){return this.codes;}
  
  /**
   * Get codetable map
   */
  getMap(){return this.map;}
	
	/**
	 * Get codetable key
	 */
	getKey(value){
		let key = null;
		this.codes.forEach(function(code){
			if(code[config.DEFAULT_CODETABLE_KEYVALUE.VALUE] == value){
				key = code[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
    		return;
    	}
    });
    return key;
  }
  
  /**
   * Get codetable value
   */
  getValue(keyArray){
  	let _self = this, valueArray = [];
  	if(keyArray != null && keyArray != undefined){
	  	if(Util.isArray(keyArray)){
		  	$.each(keyArray, (index, element) => {
		  		if(_self.map[element]){
		  			valueArray.push(_self.map[element][config.DEFAULT_CODETABLE_KEYVALUE.VALUE]);
		  		}
		  	});
	  	} else {
	  		if(this.map[keyArray]){
	  			valueArray.push(this.map[keyArray][config.DEFAULT_CODETABLE_KEYVALUE.VALUE]);
	  		}
	  	}
  	}
  	
  	return valueArray;
  }
  
  /**
   * Get codetable by foreign key
   */
  getCodeTableByForeignKey(foreignKey, parentValue){
  	let codeList = [];
  	
  	if(foreignKey == null){
  		return this.codes;
  	}
  	
  	if(parentValue != undefined){
  		this.codes.forEach(function(code){
  			if(parentValue == code[foreignKey]){
  				codeList.push(code);
  			}
  		});
  		return codeList;
  	}
  	
  	return {};
  }
  
}

