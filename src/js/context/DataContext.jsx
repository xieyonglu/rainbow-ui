//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: DataContext Class
//-----------------------------------------------------------------------------------------------
var DataContext = {
  
  data: Object.create(null),
  
	/*** Put data */
	put: function(key, value) {
		this.data[key] = value;
	},
	
	/*** Get data */
	get: function(key) {
		return this.data[key];
	},
	
	/*** Remove data */
	remove: function(key){
		delete this.data[key];
	},
	
	/*** Clear data */
	clear: function(){
		this.data = Object.create(null);
	},
	
	/*** List data */
	list: function(){
		return this.data;
	}
	
};

module.exports = DataContext;
