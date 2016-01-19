import "../../../../../plugin/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css";
import "../../../../../plugin/bootstrap-switch/dist/js/bootstrap-switch";

import Input from "../Input";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: Switch Component Class
//-----------------------------------------------------------------------------------------------
export default class Switch extends Input {
	
	renderInput(){
		return (
			<input id={this.componentId} name={this.getName()} type="checkbox" ref={this.componentId + "_ref"} />
		);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("==componentDidUpdate==");
		
		this.initProperty();
		this.initValidator();
		this.initComponent();
	}
	
	initValue(){
		let value = this.getComponentValue();
		document.getElementById(this.componentId).checked = (Switch.ON_VALUE == value) ? "checked" : null;
	}
	
	initComponent(){
		let _self = this;
		$("#" + this.componentId).bootstrapSwitch("destroy");
		$("#" + this.componentId).bootstrapSwitch({
			size: this.getSize(),
			onColor: this.props.onColor,
			offColor: this.props.offColor,
			onText: this.props.onText,
			offText: this.props.offText,
			animate: this.parseBool(this.props.animate),
			//state: this.getComponentValue() == Switch.ON_VALUE ? true : false,
			
			onInit: function(){
				//console.log("===onInit===");
			},

			onSwitchChange: function(event){
				//console.log("===onSwitchChange===");
				_self.setComponentValue(event);
				
				if(_self.props.onChange){
					let value = _self.getInputValue(event);
					_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self), value, _self.onEvent.newValue));
					_self.onEvent = {newValue: value, oldValue: _self.onEvent.newValue};
				}
			},

			destroy: function(){
				console.log("===destroy===");
			},
		})
	}

	getSize(){
		switch(this.props.size){
			case "lg": return "large";

			case "sm": return "small";

			case "xs": return "mini";
			
			// normal
			default: return "mini";
		}
	}

	getInputValue(event){
		return $("#" + this.componentId).is(":checked") ? Switch.ON_VALUE : Switch.OFF_VALUE;
	}

};

// handler switch on value & off value
Switch.ON_VALUE = config.DEFAULT_BOOLEAN_VALUE.TRUE;
Switch.OFF_VALUE = config.DEFAULT_BOOLEAN_VALUE.FALSE;

/**
 * Switch component prop types
 */
Switch.propTypes = $.extend({}, Input.propTypes, {
	onColor: React.PropTypes.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
	offColor: React.PropTypes.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
	onText: React.PropTypes.string,
  offText: React.PropTypes.string,
	size: React.PropTypes.oneOf(["lg", "sm", "xs"]),
	animate: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
});

/**
 * Switch component prop types
 */
Switch.defaultProps = $.extend({}, Input.defaultProps, {
	onColor: "primary",
	offColor: "default",
	onText: "ON",
  offText: "OFF",
  size: null,
  animate: true,
  defaultValue: Switch.OFF_VALUE
});
