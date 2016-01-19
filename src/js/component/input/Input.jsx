//http://es6.ruanyifeng.com/#docs/destructuring
//import jexl from "jexl";
//import Immutable from "immutable";
import React from "react";
import reactMixin from "react-mixin";
//import BindToMixin from "react-binding";


import ELUtil from "../../util/ELUtil";
import Convertor from "../../convertor/Convertor";
import StringUtil from "../../util/StringUtil";
import ValidatorContext from "../../context/ValidatorContext";
import Validator from "../../validator/Validator";
import DataContext from "../../context/DataContext";
import UpdateContext from "../../context/UpdateContext";
import Param from "../misc/Param";
import Event from "../misc/Event";
import OnChangeEvent from "../../event/OnChangeEvent";
import OnBlurEvent from "../../event/OnBlurEvent";
import OnFocusEvent from "../../event/OnFocusEvent";
import Component from "../../common/Component";


//-----------------------------------------------------------------------------------------------
//	date: 2015/07/01
//
//	author: yonglu.xie
//
//	description: Input Component Class
//-----------------------------------------------------------------------------------------------
export default class Input extends Component {
	
	/*** Render component */
	renderComponent(){
		if(this.props.label != undefined){
			if (this.props.layout == "vertical") {
				return this.renderVerticalLayout();
			}
			
			else if(this.props.layout == "horizontal") {
				return this.renderHorizontalLayout();
			}
		}
		
		return this.renderInputComponent();
	}

	/*** Render vertical layout */
	renderVerticalLayout(){
		return (
			<div className="col-sm-12 col-md-12 col-lg-12 form-group">
				<label htmlFor={this.componentId}>
					{this.props.label}
					
					{this.renderHelpText()}
					
					{this.renderRequired()}
				</label>

				{this.renderInputComponent()}
			</div>
		);
	}

	/*** Render horizontal layout */
	renderHorizontalLayout(){
		let styleClassArray = this.getStyleClassArray();
		let styleClassWidth = this.getStyleClassWidth();
		let labelWidth = null, inputWidth = null;
		if(styleClassWidth.length != 0){
			labelWidth = styleClassWidth[0];
			inputWidth = styleClassWidth[1];
		}

		return (
			<div className="form-group">
				<label htmlFor={this.componentId} className={styleClassArray[0] + " control-label"} style={{width: labelWidth}}>
					{this.props.label}

					{this.renderHelpText()}

					{this.renderRequired()}
				</label>

				<div className={styleClassArray[1]} style={{width: inputWidth}}>{this.renderInputComponent()}</div>
			</div>
		);
	}

	/*** Render input component */
	renderInputComponent(){
		if(this.props.io == "in" || this.props.io == null) {
			return this.renderInput();
		}
		
		else if(this.props.io == "out") {
			return this.renderOutput();
		}

		return null;
	}

	/*** Render input */
	renderInput() {return null;}

	/*** Render output */
	renderOutput() {
		return (<span className="outPutText" style={this.props.style}>{this.getOutputValue()}</span>);
	}

	/*** Get output value */
	getOutputValue(){
		let value = this.getComponentValue();
		
		if(this.props.mask != null && this.props.mask != undefined){
			value = StringUtil.mask(value, this.props.mask);
		}
		
		return value;
	}

	/**
	 * Set component value
	 */
	setComponentValue(event){
		let inputValue = Convertor.getAsObject(this.getConvertorId(), this, this.getInputValue(event));
		
		// handler valueLink & value
		if(this.props.valueLink){
			this.props.valueLink.requestChange(inputValue);
		} else {
			this.setValue(this.props.value, inputValue);
		}
  }

  /**
	 * Get component value
	 * If value is not null, it get value. else it get default value.
	 */
  getComponentValue(){
  	let value = null, {defaultValue} = this.props;
  	
  	if(this.props.valueLink){
			value = this.props.valueLink.value;
		} else {
			value = this.getValue(this.props.value);
		}

		// if value is null or undefined, and default value is not null or not defined, set default value to component value
  	if((value == null || value == undefined) && (defaultValue != null && defaultValue != undefined)){
  		value = defaultValue;
  		
  		this.setValue(this.props.value, Convertor.getAsObject(this.getConvertorId(), this, value));
  	}
  	
  	return Convertor.getAsString(this.getConvertorId(), this, value);
  }

  /**
   * Set value
   */
  setValue(value, inputValue){
  	if(ELUtil.isEL(value)){
  		value = ELUtil.getELContent(value);
	  	try {
				eval(value + "=" + '\'' + inputValue + '\'');
			} catch(e) {
				//var index = value.indexOf('.');
				//var prefix = value.substr(0, index);
				//var suffix = value.substr(index + 1, value.length);
				//var model = DataContext.get(prefix);
				//eval('model.' + suffix + "=" + '\'' + inputValue + '\'');

				let index = value.indexOf('.');
				let prefix = value.substr(0, index);
				let suffix = null;
				//model[0].a.b || model.a.b
				if(prefix.indexOf("[") != -1){
					let i = prefix.indexOf("[");
					prefix = value.substr(0, i);//model[0]
					suffix = value.substr(i, value.length);//.a.b
				} else {
					suffix = value.substr(index + 1, value.length);//a.b
					suffix = "." + suffix;//.a.b
				}

				var model = DataContext.get(prefix);
				//console.log(inputValue + "==" + this.isArray(inputValue) + "==" + prefix + "==" + suffix);
				if(inputValue == null || this.isNumber(inputValue) || this.isArray(inputValue)){
					eval("model" + suffix + "=" + JSON.stringify(inputValue));
					//DataContext.get(prefix)[suffix] = inputValue;
				} else {
					eval("model" + suffix + "=" + '\'' + inputValue + '\'');
				}
			}
  	}
  }

  /**
   * Get value
   */
  getValue(value){
  	var inputValue = null;
  	if(ELUtil.isEL(value)){
  		value = ELUtil.getELContent(value);
	  	try {
				inputValue = eval(value);
			} catch(e) {
				//var index = value.indexOf('.');
				//var prefix = value.substr(0, index);
				//var suffix = value.substr(index + 1, value.length);
				//var model = DataContext.get(prefix);
				//if(model != undefined){
				//	inputValue = eval('model.' + suffix);
				//}

				let index = value.indexOf('.');
				let prefix = value.substr(0, index);
				let suffix = null;
				if(prefix.indexOf("[") != -1){
					var i = prefix.indexOf("[");
					prefix = value.substr(0, i);
					suffix = value.substr(i, value.length);
				} else {
					suffix = value.substr(index + 1, value.length);
					suffix = "." + suffix;
				}

				let model = DataContext.get(prefix);
				if(model != undefined){
					inputValue = eval('model' + suffix);
				}
			}
  	} else if(this.isFunction(value)) {
  		inputValue = value();
  	} else {
  		inputValue = value;
  	}
  	return inputValue;
  }

  getValidatorId() {return null;}
	getConvertorId() {return null;}

	getComponent(){
  	return $(React.findDOMNode(this.refs[this.componentId + "_ref"]));
  }

  getInputValue(event){
  	return React.findDOMNode(this.refs[this.componentId + "_ref"]).value;
  }

  initEvent() {
		let _self = this;

		// handler input propertychange
		$("#" + this.componentId).bind("input propertychange", (event) => {
			_self.setComponentValue(event);
		});
		
		// handle onchange event
		$("#" + this.componentId).bind("change", (event) => {
			let value = _self.getInputValue(event);
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self), value, _self.onEvent.newValue));
			}
			_self.onEvent = {newValue: value, oldValue: _self.onEvent.newValue};
		});
		
		// handle onblur event
		$("#" + this.componentId).bind("blur", (event) => {
			if(_self.props.onBlur){
				_self.props.onBlur(new OnBlurEvent(_self, event, Param.getParameter(_self), null, null));
			}
		});

		// handle onfocus event
		$("#" + this.componentId).bind("focus", (event) => {
			if(_self.props.onFocus){
				_self.props.onFocus(new OnFocusEvent(_self, event, Param.getParameter(_self), null, null));
			}
		});
	}
	
	/*** Init value */
	initValue(){$("#" + this.componentId).val(this.getComponentValue());}
	
	/*** Init disabled */
	initDisabled(){$("#" + this.componentId).attr("disabled", this.getDisabled());}
	
	/*** Init property */
	initProperty(){
		this.initValue();
		
		this.initDisabled();
	}

	/*** Init component */
	initComponent(){}

	/*** Init validator */
	initValidator(){
		ValidatorContext.removeValidator(this.getValidationGroup(), this.componentId);
		
		if(this.props.io == "in" || this.props.io == null){
			Validator.validate("InputValidator", this);
			
			// call component validator
			Validator.validate(this.getValidatorId(), this);
		}
	}

	getValidationGroup(){
		if(this.props.validationGroup == null || this.props.validationGroup == undefined) {
			return "commonValidation";
		} else {
			return this.props.validationGroup;
		}
	}

	/**
	 * render children comonent required
	 */
	renderRequired() {
		if(this.parseBool(this.props.required) && this.props.io != "out"){
			return (
				<span id={this.componentId + "_required"} className="fa fa-asterisk"
					data-toggle="tooltip" data-placement="top" title={this.props.label + " is required."}
					style={{paddingLeft: "5px", color: "#ff5555", fontSize: "50%"}}>
				</span>
			);
		}
	}

	/**
	 * render children comonent helpText
	 */
	renderHelpText(){
		if(this.props.helpText != null && this.props.helpText != undefined){
			return (
				<span id={this.componentId + "_helpText"} className="fa fa-question-circle fa-lx"
					data-toggle="tooltip" data-placement="top" title={this.props.helpText}
					style={{paddingLeft: "5px", color: "#ed9c28"}}>
				</span>
			);
		}
	}
	
	getWidthAllocation(){
		let allocation = this.props.widthAllocation.split(",");
		let widthAllocation = [];
		widthAllocation[0] = StringUtil.trim(allocation[0]);
		widthAllocation[1] = StringUtil.trim(allocation[1]);

		return widthAllocation;
	}

	getStyleClassArray(){
		let allocation = this.getWidthAllocation();
		let styleClass = [];
		styleClass[0] = "col-sm-" + allocation[0] + " col-md-" + allocation[0] + " col-lg-" + allocation[0];
		styleClass[1] = "col-sm-" + allocation[1] + " col-md-" + allocation[1] + " col-lg-" + allocation[1];
		
		return styleClass;
	}

	getStyleClassWidth(){
		let styleClassWidth = [];
		let colspan = this.props.colspan;

		if(colspan != null && colspan != undefined){
			var allocation = this.getWidthAllocation();
			styleClassWidth[0] = ((100 * allocation[0]) / (12 * colspan)).toFixed(8) + "%";
			styleClassWidth[1] = 100 - ((100 * allocation[0]) / (12 * colspan)).toFixed(8) + "%";
		}

		return styleClassWidth;
	}
	
	componentWillMount(){
		super._componentWillMount();
		
		this.onEvent = {newValue: this.getComponentValue(), oldValue: null};
	}
	
	componentDidMount(){
		super._componentDidMount();
		
		if(this.props.io != "out"){
			this.initEvent();
			this.initProperty();
			this.initValidator();
			this.initComponent();
			
			Event.initAttributeEventListener(this);
			
			UpdateContext.put(this.componentId, this);
		}
	}
	
	componentWillUpdate(nextProps, nextState){}
	
	componentDidUpdate(prevProps, prevState){
		if(this.props.io != "out"){
			
			if(document.activeElement.id != this.componentId){
				this.initProperty();
			}
			
			this.initValidator();
		}
	}
	
};

// Minxin
//reactMixin.onClass(Input, BindToMixin);

/**
 * Input component prop types
 */
Input.propTypes = {
	id: React.PropTypes.string.isRequired,
	label: React.PropTypes.string,
	value: React.PropTypes.string,
	valueLink: React.PropTypes.shape({
		value: React.PropTypes.string.isRequired,
		requestChange: React.PropTypes.func.isRequired
	}),
	defaultValue: React.PropTypes.string,
	io: React.PropTypes.oneOf(["in", "out"]),
	placeHolder: React.PropTypes.string,
	//pattern: React.PropTypes.string,
	format: React.PropTypes.string,
	mask: React.PropTypes.string,
	helpText: React.PropTypes.string,
	layout: React.PropTypes.oneOf(["horizontal", "vertical"]),
	style: React.PropTypes.string,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "info", "warning", "danger"]),
	widthAllocation: React.PropTypes.string,
	styleClassAllocation: React.PropTypes.string,
	validationGroup: React.PropTypes.string,

	required: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	enabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	visibled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),

	minLength: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	maxLength: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	minLengthMessage: React.PropTypes.string,
	maxLengthMessage: React.PropTypes.string,
	requiredMessage: React.PropTypes.string,
	//componentType: React.PropTypes.string,

	onChange: React.PropTypes.func,
	onBlur: React.PropTypes.func,
	onFocus: React.PropTypes.func,
	//onSelect, onPropertyChange
};

/**
 * Get Input component default props
 */
Input.defaultProps = {
	io: "in",
	placeHolder: "",
	//causeValidation: true,
	defaultValue: null,
	enabled: true,
	required: false,
	visibled: true,
	style: {},
	styleClass: "primary",
	layout: "horizontal",
	widthAllocation: "4,8",
	componentType: "INPUT",

	onChange: () => {},
	onBlur: () => {},
	onFocus: () => {}
};
