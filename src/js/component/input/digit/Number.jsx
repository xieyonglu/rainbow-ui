import Digit from "./Digit";
import config from "../../../component-config";
//import Convertor from "../../../convertor/Convertor";
//import ConvertorConstant from "../../../convertor/ConvertorConstant";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Number Component Class
//-----------------------------------------------------------------------------------------------
export default class Number extends Digit {
	
	renderInput(){
		return (
			<input id={this.componentId} name={this.getName()} type="type" className="form-control" 
      	placeholder={this.props.placeHolder} ref={this.componentId + "_ref"}
      	style={{textAlign: "right"}} />
		);
	}
	
};

/**
 * Number component prop types
 */
Number.PropTypes = $.extend({}, Digit.propTypes, {
	
});
	
/**
 * Get Number component default props
 */
Number.defaultProps = $.extend({}, Digit.defaultProps, {
	format: config.DEFAULT_NUMBER_FORMAT
});
