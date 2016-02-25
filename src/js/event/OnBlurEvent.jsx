import OnEvent from "./OnEvent";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: OnBlurEvent Class
//-----------------------------------------------------------------------------------------------
export default class OnBlurEvent extends OnEvent {
	
  constructor(component, jsEvent, paramJson, newValue, oldValue) {
  	super(component, jsEvent, paramJson);
  	
  	this.newValue = newValue;
  	this.oldValue = oldValue;
	}
  
  getNewValue(){
  	return this.newValue;
  }
  
  getOldValue(){
  	return this.oldValue;
  }

  toString() {
    return this.newValue + "/" + this.oldValue;
  }
  
}
