var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

import AppDispatcher from "../common/AppDispatcher";

var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

import AppDispatcher from "../common/AppDispatcher";
import DataStore from "./DataStore";

//-----------------------------------------------------------------------------------------------
//	date:		2015/12/01
//	
//	author: yonglu.xie
//	
//	description: DataStore Class
//-----------------------------------------------------------------------------------------------
var DataContext2 = {
	
	dataJson: [],
	
	put: function(key, value, callback) {
		let dataStore = new DataStore(value);
		
		if(callback != undefined){
			dataStore.addChangeListener(callback);
			//dataStore.removeChangeListener(this.onStoreChange);	
			
			DataStore.register(this.dataJson, key);
		}
		
		this.dataJson.push({dataId: key, store: dataStore});
	},
	
	/**
	 * Get
	 */
	get: function(key) {
		for(let data of this.dataJson){
			if(data.dataId == key){
				return data["store"].getData();
			}
		}
		return null;
	},
	
	getStore: function(key){
		for(let data of this.dataJson){
			if(data.dataId == key){
				return data["store"];
			}
		}
		return null;
	},
	
	/**
	 * Remove
	 */
	remove: function(key){
		//delete this.dataJson[key];
		let indexFlag = -1;
		$.each(this.dataJson, function(index, element){
			if(element && element.dataId == key){
				indexFlag = index;
			}
		});
		
		if(indexFlag != -1){
			this.dataJson.splice(indexFlag, 1);
		}
	},
	
	/**
	 * Clear
	 */	
	clear: function(){
		//this.dataJson = {};
		this.dataJson.length = 0;
	},
	
	/**
	 * List
	 */
	list: function(){
		return this.dataJson;
	}
	
};

//======================================================================================

export default class DataStore {
	
	/**
	 * @Param: data
	 */
	constructor(data){
		return assign({}, EventEmitter.prototype, {
			data: data,
			
			setData(data){this.data = data.data;},
			
			getData: function(){return this.data;},
			
			emitChange: function(){
				//console.log("==emitChange==");
				this.emit("change");	
			},
			
			addChangeListener: function(callback){
				//console.log("==addChangeListener==");
				this.on("change", callback);
			},
			
			removeChangeListener: function(callback){
				//console.log("==removeChangeListener==");
				this.removeListener("change", callback);
			}
		});
  }
  
  /**
   * Register
   */
  static register(dataJson, key){
		AppDispatcher.register(function(payload){
			let store = null;
			for(let data of dataJson){
				if(data.dataId == key){
					store = data["store"];
					break;
				}
			}
			
			let action = payload.action;
			switch(action.actionType){
				case key://TypeConstant.ActionType.DATA_SEARCH:
					if(action.data != null && action.data != undefined){
						store.setData(action.data);
					}
					break;
					
				default:
					return true;
			}
			
			store.emitChange();
			return true;
		});
	}
	
	/**
	 * Dispatch store
	 */
	dispatch(key, data){
		AppDispatcher.handleViewAction({
			actionType: key,
			data: data
		});
	}
  
}
