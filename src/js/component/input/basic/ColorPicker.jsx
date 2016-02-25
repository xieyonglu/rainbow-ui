import "../../../../../plugin/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css";
import "../../../../../plugin/bootstrap-colorpicker/dist/js/bootstrap-colorpicker";

import Input from "../Input";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";

//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: ColorPicker Component Class
//-----------------------------------------------------------------------------------------------
export default class ColorPicker extends Input {

	renderInput(){
		return (
			<div id={this.componentId + "_div"} className="input-append color">
				<input id={this.componentId} name={this.getName()} type="text" className="form-control"
					ref={this.componentId + "_ref"} />

				<span className="add-on">
					<i style={{backgroundColor: "rgb(className)", border: "1px solid #666666"}} />
				</span>
			</div>
		);
	}

	//format: rgb, rgba, hex
	initComponent(){
		let _self = this;

		let colorPicker = $('#' + this.componentId + "_div").colorpicker({
			//color: "#000000",
			format: _self.props.format
		})

		.on("changeColor", function(event){
			_self.setComponentValue(event);
			
			if(_self.parseBool(_self.props.autoClose)){
				colorPicker.colorpicker("hide");
			}
			
			// handler change event
			if(document.activeElement.componentId != _self.componentId){
				if(_self.props.onChange){
					_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
				}
			}
		})

		.on("show", function(event){
			console.log("====show====");
		})

		.on("hide", function(event){
			console.log("====hide====");
		});

		//$('#' + this.componentId).focus(function(){
		//	colorPicker.colorpicker('show');
		//});
	}

	getInputValue(event){
		if(event.color == undefined){
			return null;
		}
  	return event.color.toHex();
  }

};

/**
 * ColorPicker component prop types
 */
ColorPicker.propTypes = $.extend({}, Input.propTypes, {
	autoClose: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),

	//format properties extends input, but it have only 4 value
	format: React.PropTypes.oneOf(["hex", "rgb", "rgba", "hsl"])
});

/**
 * Get ColorPicker component default props
 */
ColorPicker.defaultProps = $.extend({}, Input.defaultProps, {
	autoClose: false,
	format: "hex"
});
