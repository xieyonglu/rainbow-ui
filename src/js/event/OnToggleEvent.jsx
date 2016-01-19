import OnEvent from "./OnEvent";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/23
//	
//	author: yonglu.xie
//	
//	description: OnToggleEvent Class
//-----------------------------------------------------------------------------------------------
export default class OnToggleEvent extends OnEvent {
	
	constructor(component, toggle){
		super(component, null, null);
		
    this.toggle = toggle;
  }
  
  getToggle(){
  	return this.toggle;
  }
  
};
