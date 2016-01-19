import Digit from "./Digit";
import config from "../../../component-config";
import ConvertorConstant from "../../../convertor/ConvertorConstant";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Percent Component Class
//-----------------------------------------------------------------------------------------------
export default class Percent extends Digit {
	
	renderInput(){
		if(this.props.symbolPosition == "left"){
			return (<div className="input-group">{this.renderSymbol()}{this.renderInputElement()}</div>);
		} else if(this.props.symbolPosition == "none"){
			return input;
		} else {
			return (<div className="input-group">{this.renderInputElement()}{this.renderSymbol()}</div>);
		}
	}
	
	/**
	 * Render input element
	 */
	renderInputElement(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" className="form-control" 
				placeholder={this.props.placeHolder} ref={this.componentId + "_ref"}
				style={{textAlign: "right", paddingRight: "22px"}} />
		);
	}
	
	/**
	 * Render symbol
	 */
	renderSymbol(){
		return (
			<span className="input-group-addon percentcover">
				<span className="glyphicon2 glyphicon-envelope2">{Percent.SYMBOL}</span>
			</span>
		);
	}
	
	getOutputValue() {
		let value = this.getComponentValue();
		
		// render percent component by symbol position
		if(this.props.symbolPosition == "left"){
			return Percent.SYMBOL + " " + value;
		} else if(this.props.symbolPosition == "none"){
			return value;
		} else {
			return value + " " + Percent.SYMBOL;
		}
	}
	
	initEvent(){
		super.initEvent();
		
		let _self = this;
		$("#" + this.componentId).change((event) => {
			var value = event.target.value;
			if(parseFloat(value) > parseInt(_self.props.limit)){
				$("#" + _self.componentId).val(_self.formatDigit(_self.canonicalDigit(parseInt(_self.props.limit))));
				_self.setComponentValue(event);
			}
		});
	}
	
	getConvertorId() {
		return ConvertorConstant.PERCENT_CONVERTOR;
	}
	
};

/**
 * Percent symbol
 */
Percent.SYMBOL = "%";

/**
 * Percent component prop types
 */
Percent.PropTypes = $.extend({}, Digit.propTypes, {
	limit: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	symbolPosition: React.PropTypes.oneOf(["left", "right", "none"]),
});

/**
 * Get Percent component default props
 */
Percent.defaultProps = $.extend({}, Digit.defaultProps, {
	format: config.DEFAULT_NUMBER_FORMAT,
	limit: 100,
	symbolPosition: "right"
});
