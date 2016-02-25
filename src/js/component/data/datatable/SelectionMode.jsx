import KeyValue from "../../input/keyvalue/KeyValue";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/07
//	
//	author: yonglu.xie
//	
//	description: SelectionMode Component Class
//-----------------------------------------------------------------------------------------------
export default class SelectionMode extends KeyValue {
	
	renderInput(){
		if("single" == this.props.selectionMode){
			return (
				<input id={this.props.id} name={this.props.name} type="radio" disabled={this.getDisabled()} />
			);
		}
		
		else if("multiple" == this.props.selectionMode){
			return (
				<input id={this.props.id} name={this.props.name} type="checkbox" disabled={this.getDisabled()} />
			);
		}
		return null;
	}
	
	componentDidMount(){
		if(this.props.io != "out"){
			this.initEvent();
			this.initValue();
		}
	}
	
	componentDidUpdate(){
		if(this.props.io != "out"){
			this.initEvent();
			this.initValue();
		}
	}
	
	/**
	 * Init code table event
	 */
	initEvent() {
		let _self = this;
		
		// handle onchange event
		$("#" + this.props.id).change(function(event){
			//_self.onComponentChange(event);
			
			if(_self.props.onChange){
				_self.props.onChange(event);
			}
		});
	}
	
	initValue(){
		let value = this.getComponentValue();
		
		if(value == "1" || value == 1){
			$("#" + this.props.id).attr("checked", "checked");
		} else {
			$("#" + this.props.id).attr("checked", null);
		}
	}
	
	getInputValue(event){	
  	return $("#" + this.props.id).is(":checked") ? 1 : 0;
  }
	
};


/**
 * SelectionMode component prop types
 */
SelectionMode.propTypes = $.extend({}, KeyValue.propTypes, {
	selectionMode: React.PropTypes.oneOf(["single", "multiple"]),
});

/**
 * Get SelectionMode component default props
 */
SelectionMode.defaultProps = $.extend({}, KeyValue.defaultProps, {
	selectionMode: "single"
});
