import ArrayUtil from "../util/ArrayUtil";

//-----------------------------------------------------------------------------------------------
//	date: 2015/09/12
//	
//	author: yonglu.xie
//	
//	description: UpdateContext Class
//-----------------------------------------------------------------------------------------------
var UpdateContext = {
	
  data: Object.create(null),
	
	/*** Put */
	put: function(key, value){
		this.data[key] = value;
	},
	
	/*** Get */
	get: function(key){
		return this.data[key];
	},
	
	/*** Remove */
	remove: function(key){
		delete this.data[key];
	},
	
	/*** Clear */
	clear: function(key){
		this.data = Object.create(null);
	},
	
	/*** List */
	list: function(){
		return this.data;
	},
	
	/**
	 * Get component by componentId
	 */
	getComponent: function(componentId){
		let componentIdArray = ArrayUtil.trimArray(componentId.split(","));
		let _self = this, componentArray = [];
		
		$.each(componentIdArray, function(index, element){
			let component = _self.data[element];
			if(component != undefined){
				componentArray.push(component);
			}
		});
		
		return componentArray;
	},
	
	/**
	 * Force update component by componentId
	 */
	forceUpdate: function(componentId){
		let componentArray = this.getComponent(componentId);
		
		$.each(componentArray, function(index, element){
			if(element.props.componentType == "UpdatePanel"){
				$("#" + element.props.id + "_hiddenBtn").trigger("click");
			} else {
				element.forceUpdate();
			}
		});
	}
	
};

module.exports = UpdateContext;
