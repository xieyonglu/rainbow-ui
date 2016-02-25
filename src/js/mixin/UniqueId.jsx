import Immutable from "../../../node_modules/immutable";
import ArrayUtil from "../util/ArrayUtil";

let index = 0;
let componentList = Immutable.List();

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/04
//	
//	author: yonglu.xie
//	
//	description: UniqueId Class
//-----------------------------------------------------------------------------------------------
module.exports = {
	
	/**
	 * Generate component unique id
	 */
	generateId(){
    return "rainbow-ui-" + (index++);
  },
  
  /**
   * Add component id
   */
  addComponentId(){
  	if(this.componentId){
  		componentList = componentList.push(this.componentId);
  	}
  },
  
  /**
   * Clear component id
   */
  clearComponentId(){
  	index = 0;
  	componentList = componentList.clear();
  },
  
  /**
   * Validate component id
   */
  validateComponentId(){
  	let repeatElement = ArrayUtil.repeatElement(componentList.toJS());
		
		if(repeatElement != null){
			throw Error("The page have repeat element id, it is " + repeatElement);
		}
  }
  
};
