//-----------------------------------------------------------------------------------------------
//	date: 2015/09/12
//	
//	author: yonglu.xie
//	
//	description: ArrayUtil
//-----------------------------------------------------------------------------------------------
var ArrayUtil = {
	
	/**
	 * Trim array
	 */
	trimArray: function(array){
		var arrayTemp = [];
		$.each(array, function(index, element){
			arrayTemp.push(element.replace(/^\s+|\s+$/gm, ''));
		});
		return arrayTemp;
	},
	
	/**
	 * To determine if the array has duplicate elements
	 */
	isRepeat: function(array){
		let hash = {};
		for(let i in array){
			if(hash[array[i]]){
				return true;
			}
			hash[array[i]] = true;
		}
		return false;
	},
	
	/**
	 * To determine if the array has duplicate elements
	 */
	repeatElement: function(array){
		let hash = {};
		for(let i in array){
			if(hash[array[i]]){
				return array[i];
			}
			hash[array[i]] = true;
		}
		return null;
	}
	
}

module.exports = ArrayUtil;
