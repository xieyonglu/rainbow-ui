import OnEvent from "./OnEvent";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: OnTabChangeEvent Class
//-----------------------------------------------------------------------------------------------
export default class OnTabChangeEvent extends OnEvent {
	
	constructor(component, jsEvent, paramJson, newActiveIndex, oldActiveIndex){
		super(component, jsEvent, paramJson);
		
    this.newActiveIndex = newActiveIndex;
    this.oldActiveIndex = oldActiveIndex;
  }
  
  getNewActiveIndex(){
  	return this.newActiveIndex;
  }
  
  getOldActiveIndex(){
  	return this.oldActiveIndex;
  }

  toString() {
    return this.newActiveIndex + "/" + this.oldActiveIndex;
  }
  
}
