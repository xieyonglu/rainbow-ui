import React from "react";
import reactMixin from "react-mixin";


import Classable from "../mixin/Classable";
import UniqueId from "../mixin/UniqueId";
import Util from "../util/Util";
import config from "../component-config";


//-----------------------------------------------------------------------------------------------
//	date: 2015/11/24
//	
//	author: yonglu.xie
//	
//	description: Component Class
//-----------------------------------------------------------------------------------------------
export default class Component extends React.Component {
	
	constructor(props) {
		super(props);
		//this.state = {};
	}
	
	render() {
		if(this.parseBool(this.props.visibled)) {
			return this.renderComponent();
		}
		return null;
	}
	
	/*** Render component */
	renderComponent(){return null;}
	
	/*** Get component property */
	getProperty(propertyName){
		let property = this.props[propertyName];
		
		if(this.isFunction(property)){
			return property(this);
		}
		
		return property;
	}
	
	/*** Get component id */
	getId(){
		return this.componentId;
	}
	
	/** 
	 * Get component name 
	 */
	getName(){return this.componentId;}
	
	/*** Get disabled */
	getDisabled(){
		if(this.parseBool(this.props.disabled) || !this.parseBool(this.props.enabled)){
			return "disabled";
		}
		return null;
	}
	
	/*** Get component url */
	getURL(){
		let url = this.getProperty("url")
		if(url.indexOf("?") > -1){
	    url = url + "&" + localStorage.getItem("Authorization");
	  } else {
	    url = url + "?" + localStorage.getItem("Authorization");
	  }
	  
	  return url;
	}
	
	/** Component will mount */
	componentWillMount(){this._componentWillMount();}
	_componentWillMount(){
		this.componentId = (this.props.id) ? this.props.id : this.generateId();
	}
	
	/** Component did mount */
	componentDidMount(){this._componentDidMount();}
	_componentDidMount(){
		this.addComponentId();
	}
	
	/** Component will update */
	componentWillUpdate(){this._componentWillUpdate();}
	_componentWillUpdate(){
		
	}
	
	/** Component did update */
	componentDidUpdate(){this._componentDidUpdate();}
	_componentDidUpdate(){
		
	}
	
}


// Mixin Class
reactMixin.onClass(Component, Util);
reactMixin.onClass(Component, Classable);
reactMixin.onClass(Component, UniqueId);


/**
 * Component component prop types
 */
Component.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
	style: React.PropTypes.string,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	className: React.PropTypes.string,
	enabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	visibled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	onClick: React.PropTypes.func
};

/**
 * Get component component default props
 */
Component.defaultProps = {
	enabled: true,
	disabled: false,
	visibled: true,
	styleClass: config.DEFAULT_STYLE_CLASS,
	
	onClick: () => {}
};

