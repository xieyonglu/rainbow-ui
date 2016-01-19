import Input from "../Input";
import ConvertorConstant from "../../../convertor/ConvertorConstant";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Textarea Component Class
//-----------------------------------------------------------------------------------------------
export default class Textarea extends Input {
	
	renderInput(){
		return (
    	<textarea id={this.componentId} name={this.getName()} className="form-control"
    		cols={this.props.cols} rows={this.props.rows} placeholder={this.props.placeHolder}
				ref={this.componentId + "_ref"} style={this.getStyle()} />
		);
	}
	
	getStyle(){
		let {cols, style} = this.props;
		if(cols != null && cols != undefined){
			return $.extend({}, style, {width: "auto"});
		}
		
		//style.resize = "none";
		return style;
	}
	
	getConvertorId(){
		return ConvertorConstant.TEXTAREA_CONVERTOR;
	}
	
};

/**
 * Textarea component prop types
 */
Textarea.propTypes = $.extend({}, Input.propTypes, {
	cols: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	rows: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	//resize: none|both|horizontal|vertical
});

/**
 * Get Textarea component default props
 */
Textarea.defaultProps = $.extend({}, Input.defaultProps, {
	
});
