import Select from "./Select";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import OnBlurEvent from "../../../event/OnBlurEvent";
import OnFocusEvent from "../../../event/OnFocusEvent";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/28
//	
//	author: yonglu.xie
//	
//	description: TextSelect Component Class
//-----------------------------------------------------------------------------------------------
export default class TextSelect extends Select {
	
	renderInput(){
		return (
			<div className="input-group col-sm-12 col-md-12 col-lg-12">
				<div className="col-sm-6 col-md-6 col-lg-6" style={{padding: "0px"}}>
					<input id={this.componentId} name={this.getName()} type="text"
						className="form-control" placeholder={this.props.placeHolder}
						ref={this.componentId + "_ref"} disabled={this.getDisabled()} />
				</div>
				
				<div className="col-sm-6 col-md-6 col-lg-6" style={{padding: "0px"}}>
					<select id={this.componentId + "_value"} name={this.componentId + "_value"} className="form-control"
						style={{width: this.props.width}} ref={this.componentId + "_ref_value"} disabled={this.getDisabled()}>
					</select>
				</div>
			</div>
		);
	}
	
	getOutputValue(){
		let codeTable = this.codeTable.getMap();
		let key = this.getComponentValue();
		let value = (key != null && key != undefined && key != "" && codeTable[key] != undefined) ? codeTable[key][config.DEFAULT_CODETABLE_KEYVALUE.VALUE] : null;
		
		key = (key != null && key != undefined) ? key : "";
		value = (value != null && value != undefined) ? value : "";
		
		return key + " " + value;
	}

	componentDidMount(){
		super._componentDidMount();
		if(this.props.io != "out"){
			this.initEvent();
			this.initValueEvent();
			this.initValue();
			this.initValidator();
			this.fillSelectOption();
		}
	}
	
	componentDidUpdate(){
		super.componentDidUpdate();
		
		if(this.props.io != "out"){
			//this.initEvent();
			//this.initValueEvent();
			this.initValue();
			this.initValidator();
			this.fillSelectOption();
		}
	}
	
	initValueEvent() {
		let _self = this;
		
		$("#" + this.componentId).blur(function(event){
			let codeTable = _self.codeTable.getMap();
			if(codeTable[event.target.value] == undefined){
				$("#" + _self.componentId).val("");
				$("#" + _self.componentId + "_value").val("");
				
				_self.setComponentValue(event);
			} else {
				$("#" + _self.componentId + "_value").val(codeTable[event.target.value][config.DEFAULT_CODETABLE_KEYVALUE.KEY]);
			}
		});
		
		// handle onchange event
		$("#" + this.componentId + "_value").change(function(event){
			let codeTable = _self.codeTable.getMap();
			
			if(codeTable[event.target.value] == undefined){
				$("#" + _self.componentId).val("");
				$("#" + _self.componentId + "_value").val("");
			} else {
				$("#" + _self.componentId).val(event.target.value);
			}
			
			_self.setComponentValue(event);
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
			}
		});
		
		// handle onblur event
		$("#" + this.componentId + "_value").blur(function(event){
			let codeTable = _self.codeTable.getMap();
			if(codeTable[event.target.value] == undefined){
				$("#" + _self.componentId).val("");
				$("#" + _self.componentId + "_value").val("");
				_self.setComponentValue(event);
			} else {
				$("#" + _self.componentId + "_value").val(event.target.value);
			}
			
			if(_self.props.onBlur){
				_self.props.onBlur(new OnBlurEvent(_self, event, Param.getParameter(_self)));
			}
		});
		
		// handle onfocus event
		$("#" + this.componentId + "_value").focus(function(event){
			if(_self.props.onFocus){
				_self.props.onFocus(new OnFocusEvent(_self, event, Param.getParameter(_self)));
			}
		});
	}
	
	initValue(){
		let codeTable = this.codeTable.getMap();
		let key = this.getComponentValue();
		let value = (codeTable[key] != undefined) ? codeTable[key][config.DEFAULT_CODETABLE_KEYVALUE.VALUE] : null;
		
		$("#" + this.componentId).val(key);
		$("#" + this.componentId + "_value").val(value);
	}
	
	getSelfElement(){
		return $("#" + this.componentId + "_value");
	}
	
};

/**
 * TextSelect component prop types
 */
TextSelect.propTypes = $.extend({}, Select.propTypes, {
	
});

/**
 * Get TextSelect component default props
 */
TextSelect.defaultProps = $.extend({}, Select.defaultProps, {
	
});
