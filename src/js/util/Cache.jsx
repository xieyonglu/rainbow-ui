//https://github.com/ptarjan/node-cache

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/27
//	
//	author: yonglu.xie
//	
//	description: Cache Class
//-----------------------------------------------------------------------------------------------
var Cache = {
  
  cache: Object.create(null),
  debug: false,
  hitCount: 0,
  missCount: 0,
  size: 0,
  
  /**
   * Simply stores a value
   * If time isn't passed in, it is stored forever
   * Will actually remove the value in the specified time in ms (via setTimeout)
   * Returns the cached value
   */
  put: function(key, value, time, timeoutCallback){
  	if(this.debug){
  		console.log("caching: %s = %j (@%s)", key, value, time);
  	}
  	
  	if(typeof time !== "undefined" && (typeof time !== "number" || isNaN(time) || time <= 0)){
  		throw new Error("Cache timeout must be a positive number");
  	}else if(typeof timeoutCallback !== 'undefined' && typeof timeoutCallback !== "function"){
	    throw new Error("Cache timeout callback must be a function");
	  }
	  
	  var oldRecord = this.cache[key];
	  if(oldRecord){
	  	clearTimeout(oldRecord.timeout);
	  } else {
	  	this.size++;
	  }
	  
	  var record = {
	  	value: value,
	  	expire: time + Date.now()
	  };
	  var _self = this;
	  if (!isNaN(record.expire)){
	  	record.timeout = setTimeout(function(){
	      _self.remove(key);
	      
	      if(timeoutCallback){
	        timeoutCallback(key);
	      }
	    }, time);
  	}
  	this.cache[key] = record;
  	return value;
  },
  
  /**
   * Deletes a key, returns a boolean specifying whether or not the key was deleted
   */
  remove: function(key){
  	var canDelete = true;
  	var oldRecord = this.cache[key];
  	
  	if(oldRecord){
  		clearTimeout(oldRecord.timeout);
  		if(!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()){
  			canDelete = false;
  		}
  	} else {
  		canDelete = false;
  	}
  	if(canDelete){
  		this.size--;
  		delete this.cache[key];
  	}
  	return canDelete;
  },
  
  /**
   * Deletes all keys
   */
  clear: function() {
  	for(var key in this.cache){
  		clearTimeout(this.cache[key].timeout);
  	}
  	this.size = 0;
  	this.cache = Object.create(null);
  	if(debug){
  		this.hitCount = 0;
  		this.missCount = 0;
  	}
  },
  
  /**
   * Retrieves a value for a given key
   * If value isn't cached, returns null
   */
  get: function(key){
  	var data = this.cache[key];
  	if (typeof data != "undefined"){
  		if (isNaN(data.expire) || data.expire >= Date.now()){
  			if(this.debug) hitCount++;
  			return data.value;
  		} else {
  			// free some space
  			if (this.debug) missCount++;
  			this.size--;
  			delete this.cache[key];
  		}
  	} else if(this.debug){
  		missCount++;
  	}
  	return null;
  },
  
  /*
  //Returns the current number of entries in the cache
  size: function(){
  	return this.size;
  },
  
  //Returns the number of entries taking up space in the cache
  //Will usually == size() unless a setTimeout removal went wrong
  memsize: function(){
  	var size = 0, key;
    for(key in this.cache){
    	size++;
    }
    return size;
  },
  
  //Turns on or off debugging
  debug: function(bool){
  	this.debug = bool;
  },
  
  //Returns the number of cache hits (only monitored in debug mode)
  hits: function(){
  	return this.hitCount;
  },
  
  //Returns the number of cache misses (only monitored in debug mode)
  misses: function(){
  	return this.missCount;
  },
  */
  
  /**
   * Returns all the cache keys
   */
  keys: function(){
  	return Object.keys(this.cache);
  }
	
};

module.exports = Cache;
