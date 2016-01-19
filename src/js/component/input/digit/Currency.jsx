import Digit from "./Digit";
import config from "../../../component-config";
//import UpdateContext from "../../../context/UpdateContext";
//import ConvertorConstant from "../../../convertor/ConvertorConstant";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Currency Component Class
//-----------------------------------------------------------------------------------------------
export default class Currency extends Digit {
	
	renderInput(){
		if(this.props.unitPosition == "right"){
			return (<div className="input-group">{this.renderInputElement()}{this.renderUnit()}</div>);
		} else if(this.props.unitPosition == "none"){
			return this.renderInputElement();
		} else {
			return (<div className="input-group">{this.renderUnit()}{this.renderInputElement()}</div>);
		}
	}
	
	/**
	 * Render unit
	 */
	renderUnit(){
		return (
			<span className="input-group-addon currencyoverflow"><span>{this.props.unit}</span></span>
		);
	}
	
	/**
	 * Render input element
	 */
	renderInputElement(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" className="form-control" 
				placeholder={this.props.placeHolder} ref={this.componentId + "_ref"}
				style={{textAlign: "right"}} />
		);
	}
	
	/**
	 * Get output value
	 */
	getOutputValue() {
		let value = this.getComponentValue();
		value = (value != null && value != undefined) ? value : "";
		
		if(this.props.unitPosition == "right"){
			return value + " " + this.props.unit;
		} else if(this.props.unitPosition == "none"){
			return value;
		} else {
			return this.props.unit + " " + value;
		}
	}
	
};


/**
 * Currency component prop types
 */
Currency.PropTypes = $.extend({}, Digit.propTypes, {
	unit: React.PropTypes.string,
	unitPosition: React.PropTypes.oneOf(["left", "right", "none"]),
});
	
/**
 * Get Currency component default props
 */
Currency.defaultProps = $.extend({}, Digit.defaultProps, {
	format: config.DEFAULT_CURRENCY_FORMAT,
	unit: config.DEFAULT_CURRENCY_UNIT,
	unitPosition: "left"
});
