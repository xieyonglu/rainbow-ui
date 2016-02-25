import "../../../../../node_modules/bootstrap-slider/css/bootstrap-slider.css";
import "../../../../../node_modules/bootstrap-slider/js/bootstrap-slider";

import Input from "../Input";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Slider Component Class
//-----------------------------------------------------------------------------------------------
export default class Slider extends Input {
	
	renderInput(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" ref={this.componentId + "_ref"} />
		);
	}
	
	componentDidMount(){
		super._componentDidMount();
		
		if(this.props.io != "out"){
			//this.initEvent();
			//this.initValue();
			this.initValidator();
			this.initComponent();
		}
	}
	
	initComponent(){
		let _self = this;
		let value = _self.getComponentValue();
		value = this.isArray(value) ? value : parseInt(value);
		
		$("#" + this.componentId).slider({
			value: value,
			//value: [0, 20],
			min: parseInt(this.props.min),
			max: parseInt(this.props.max),
			step: parseInt(this.props.step),
			enabled: this.parseBool(this.props.enabled),
			orientation: this.props.orientation,//Accepts 'vertical' or 'horizontal'
			tooltip: this.props.tooltip, //Accepts: 'show' or 'hide'
			selection: "none", //Accepts: 'before', 'after' or 'none'. 
			handle: this.props.handle,
			precision: 2,
			formatter: function(value) {
				//console.log("==formatter==" + value);
				//_self.onComponentChange();
				return "Current value: " + value;
			}
		})
		
		.on("slideStart", function(){
			//console.log("===slideStart===");
			// handle onSlideStart event
			if(_self.props.onSlideStart){
				_self.props.onSlideStart();
			}
		})
		
		.on("slide", function(){
			//console.log("===slide===");
			// handle onSlide event
			if(_self.props.onSlide){
				_self.props.onSlide();
			}
		})
		
		.on("slideStop", function(){
			//console.log("===slideStop===");
			// handle onSlideStart event
			if(_self.props.onSlideStop){
				_self.props.onSlideStop();
			}
			
			_self.setComponentValue();
		});
	}
	
};

/**
 * Slider component prop types
 */
Slider.propTypes = $.extend({}, Input.propTypes, {
	min: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	max: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	step: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	orientation: React.PropTypes.oneOf(["vertical", "horizontal"]),
	handle: React.PropTypes.oneOf(["round", "square", "triangle", "custom"]),
	tooltip:  React.PropTypes.oneOf(["show", "hide"]),
	
	// not support onChange & onFocus & onBlur event
	onSlideStart: React.PropTypes.func,
	onSlider: React.PropTypes.func,
	onSlideStop: React.PropTypes.func
});

/**
 * Get Slider component default props
 */
Slider.defaultProps = $.extend({}, Input.defaultProps, {
	defaultValue: 0,
	handle: "round",
	min: 0,
	max: 100,
	step: 1,
	orientation: "horizontal",
	tooltip: "show"
});
