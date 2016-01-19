let Event = require('../util/Event');

module.exports = {
	
	componentDidMount() {
		let listeners = this.windowListeners;

    for (let eventName in listeners) {
    	let callbackName = listeners[eventName];
    	Event.on(window, eventName, this[callbackName]);
    }
  },
	
  componentWillUnmount() {
    let listeners = this.windowListeners;
    
    for (let eventName in listeners) {
    	let callbackName = listeners[eventName];
    	Event.off(window, eventName, this[callbackName]);
    }
  },

};
