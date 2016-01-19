//require('../../../../plugin/jquery-maskedinput/jquery.maskedinput');
require('../../../../../plugin/jquery-inputmask/dist/inputmask/inputmask');
require('../../../../../plugin/jquery-inputmask/dist/inputmask/jquery.inputmask');


import Input from "../Input";
import ELUtil from "../../../util/ELUtil";
import StringUtil from "../../../util/StringUtil";
import Param from "../../misc/Param";
import OnClickEvent from "../../../event/OnClickEvent";
import ConvertorConstant from "../../../convertor/ConvertorConstant";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/01
//	
//	author: yonglu.xie
//	
//	description: Text Component Class
//-----------------------------------------------------------------------------------------------
export default class Text extends Input {
	
	renderInput(){
		if(this.props.prefixIcon != undefined || this.props.suffixIcon != undefined || this.props.prefixText != undefined || this.props.suffixText != undefined){
			return (
				<div className="input-group">
					{this.renderPrefixText()}
					{this.renderPrefixIcon()}
					{this.renderInputElement()}
					{this.renderSuffixIcon()}
					{this.renderSuffixText()}
				</div>
			);
		} else {
			return this.renderInputElement();
		}
	}
	
	/**
	 * Render input element
	 */
	renderInputElement(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" style={this.props.style}
				className="form-control" placeholder={this.props.placeHolder}
				ref={this.componentId + "_ref"} />
		);
	}
	
	/**
	 * Render prefix icon
	 */
	renderPrefixIcon(){
		if(this.props.prefixIcon != undefined){
			return (
				<span className="input-group-addon fixalliconposition">
					<span id={this.componentId + "_prefixIcon"} className={this.props.prefixIcon} style={{cursor: "pointer"}} onClick={this.onPrefixIconClick.bind(this)} />
				</span>
			);
		}
		return null;
	}
	
	/**
	 * Render suffix icon
	 */
	renderSuffixIcon(){
		if(this.props.suffixIcon != undefined){
			return (
				<span className="input-group-addon fixalliconposition">
					<span id={this.componentId + "_suffixIcon"} className={this.props.suffixIcon} style={{cursor: "pointer"}} onClick={this.onSuffixIconClick.bind(this)} />
				</span>
			);
		}
		return null;
	}
	
	/**
	 * Render prefix text
	 */
	renderPrefixText(){
		if(this.props.prefixText != undefined){
			return (
				<span className="input-group-addon fixalliconposition">
					<span>{this.props.prefixText}</span>
				</span>
			);
		}
		return null;
	}
	
	/**
	 * Render suffix text
	 */
	renderSuffixText(){
		if(this.props.suffixText != undefined){
			return (
				<span className="input-group-addon fixalliconposition">
					<span>{this.props.suffixText}</span>
				</span>
			);
		}
		return null;
	}
	
	getOutputValue() {
		let value = this.getComponentValue();
		
		if(this.props.mask != null && this.props.mask != undefined){
			value = StringUtil.mask(value, this.props.mask);
		}
		
		if(this.props.pattern != undefined && value != undefined && value != null){
			value = Inputmask(this.props.pattern).format(value)
		}
		
		return value;
	}
	
	initEvent(){
		super.initEvent();
		
		if(this.props.io != "out"){
			let _self = this;
			
			$("#" + this.componentId).keypress(function(event){
				if (!event.ctrlKey) {
					_self.handlerAllowChars(event);
				}
			});
			
			$("#" + this.componentId).change(function(event){
				_self.handlerOnChangeAllowChars(event);
				_self.handlerClearBlank(event);
				_self.handlerUpperLowerCase(event);
				
				_self.setComponentValue(event);
			});
		} 
	}
	
	initComponent(){
		if(this.props.pattern != undefined){
			//$("#" + this.componentId).mask(this.props.pattern);
			$("#" + this.componentId).inputmask(this.props.pattern);
		}
	}
	
	/**
	 * Handler to upper or lower case
	 */
	handlerUpperLowerCase(event){
		if(this.props.toUpperLowerCase != undefined){
			let {toUpperLowerCase} = this.props;
			let input = this.getComponent();
			
			if(toUpperLowerCase == "upper"){
				input.val(input.val().toUpperCase());
			} else if(toUpperLowerCase == "lower"){
				input.val(input.val().toLowerCase());
			}
		}
	}
	
	/**
	 * Handler clear blank
	 */
	handlerClearBlank(event){
		if(this.props.clearBlank != undefined){
			let {clearBlank} = this.props;
			let component = this.getComponent();
			let value = component.val();
			
			if(clearBlank == "left"){
				value = value.replace(/(^\s*)/g, "")
			} else if(clearBlank == "right"){
				value = value.replace(/(\s*$)/g, "");
			} else if(clearBlank == "both"){
				value = value.replace(/(^\s*)|(\s*$)/g, "");
			} else if(clearBlank == "all"){
				value = value.replace(/\s/g, "");
			}
			
			component.val(value);
		}
	}
	
	/**
	 * Hanlder keypress event allow chars
	 */
	handlerAllowChars(event){
		if(this.props.allowChars != undefined){
			let allowChars = String(this.props.allowChars);
			let which = event.which;
			
			if(StringUtil.isRegex(this.props.allowChars)){
				let regex = eval(allowChars.replace(/\/\//g, "\/"));
				
				if(!regex.exec(String.fromCharCode(which))){
					event.preventDefault();
				}
			} else {
				if(allowChars.indexOf(String.fromCharCode(which)) === -1){
					event.preventDefault();
				}
			}
		}
	}
	
	/**
	 * Handler change event allow chars
	 */
	handlerOnChangeAllowChars(event){
		if(this.props.allowChars != undefined){
			let allowChars = String(this.props.allowChars);
			let component = this.getComponent();
			let value = component.val();
			
			if(StringUtil.isRegex(this.props.allowChars)){
				let regex = eval(allowChars.replace(/\/\//g, "\/"));
				if(!regex.exec(value)){
					component.val(this.onEvent.newValue);
				}
			} else {
				if(!StringUtil.isChars(allowChars, value)){
					component.val(this.onEvent.newValue);
				}
			}
		}
	}
	
	onPrefixIconClick(){
		if(this.props.onPrefixIconClick){
			this.props.onPrefixIconClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}
	
	onSuffixIconClick(){
		if(this.props.onSuffixIconClick){
			this.props.onSuffixIconClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
	}
	
	getConvertorId() {
		return ConvertorConstant.TEXT_CONVERTOR;
	}
	
};


/**
 * Text component prop types
 */
Text.propTypes = $.extend({}, Input.propTypes, {
	pattern: React.PropTypes.string,
	clearBlank: React.PropTypes.oneOf(["left", "right", "both", "all"]),
	allowChars: React.PropTypes.string,
	toUpperLowerCase: React.PropTypes.oneOf(["upper", "lower"]),
	
	prefixIcon: React.PropTypes.string,
	suffixIcon: React.PropTypes.string,
	prefixText: React.PropTypes.string,
	suffixText: React.PropTypes.string,
	
	onPrefixIconClick: React.PropTypes.func,
	onSuffixIconClick: React.PropTypes.func,
});

/**
 * Get Text component default props
 */
Text.defaultProps = $.extend({}, Input.defaultProps, {
	//clearBlank: "all",
	//allowChars: "/^[A-Z]*$/"
	//toUpperLowerCase: "upper",
	//pattern: "[A-Z]"//"9999-9999",
	//placeHolder: "____-____-____-____"
	//pattern: "9999-9999", placeHolder: "____-_____"
	//"(999) 999-9999" placeholder="(___) ___-____"
});
